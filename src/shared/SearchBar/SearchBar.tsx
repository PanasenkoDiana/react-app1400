import { useEffect, useRef, useState } from "react";
import "./SearchBar.css";
import { useProducts } from "../../hooks/useProducts";
import { SearchProduct } from "../SearchProduct/SearchProduct";

interface ISearchBarProps { // створення інтерфейсу для отримання елементів пошуку з header
    setSearch: (value: string) => void;
    search: string;
  }

export function SearchBar({setSearch, search}: ISearchBarProps){

    const [isOpen, setIsOpen] = useState(false); // створення стану для відкриття модального вікна
    const modalRef = useRef<HTMLDivElement | null>(null); // створення посилання на елемент

    const {products} = useProducts() // виклик хука для отримання продуктів
  
    const handleFocus = () => { // функція для відкриття модального вікна
      setIsOpen(true);
    };

    const handleExit = () => { // функція для закриття модального вікна
        setIsOpen(false);
      };
  
    useEffect(() => { 
      const handleClickOutside = (event: MouseEvent) => { // функція для закриття модального вікна при кліку за межами вікна
        if (
          modalRef.current && // якщо наш елемент існує і заперечення того, що наш елемент є дочірнім елементом на який ми натиснули
          !modalRef.current.contains(event.target as Node) 
        ) {
          setIsOpen(false); // закриття модального вікна
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside); // додавання слухача подій для закриття модального вікна
      return () => {
        document.removeEventListener("mousedown", handleClickOutside); // видалення слухача подій
      };
    }, []);
  
    return (
      <div className="header">
        <input
          type="text"
          placeholder="Пошук продуктів..."
          onFocus={handleFocus}
          className="input"
          onChange={(event)=>{setSearch(event.target.value)}} // присвоєння функції для пошуку продуктів, які відповідають введеному значенню
        />
  
        {isOpen && (
          <div ref={modalRef} className="search-modal">  {/* ref={modalRef} - отримуємо значення елементу */}
            <ul>
                {products.map((product) => { // перебір продуктів, відображення тих, які відповідають введеному значенню
                    return (search === '' || product.title.toLowerCase().includes(search.toLowerCase())) ? (
                        <li className="search-field" key={product.id} onClick={handleExit}>
                            <SearchProduct
                                id={product.id}
                                name={product.title}
                                price={product.price}
                                img={product.image}
                            ></SearchProduct>
                        </li>
                    ) : null;
                })}
            </ul>
          </div>
        )}
      </div>
    );
};
