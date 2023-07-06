import { createContext, useContext, useState, useEffect } from "react";


const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([
        {
            id: "4e3196be-Faac-4da0-A95c-0d15837b71f4",
            title: "The Lord of the Rings",
            author: "J. R. R. Tolkien",
            category: "Fantasy",
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar dictum massa, in mattis velit varius vel. Praesent in nisi eleifend, pretium ipsum ut, mollis ex. Sed euismod ante mauris.',
            pages: 1178,
            stock: true,
        },
        {
            id: "87a3aa1c-Efeb-49a0-B57f-1bf0a550fd38",
            title: "Harry Potter",
            author: "J. K. Rowling, asdasd",
            category: "Fantasy",
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar dictum massa, in mattis velit varius vel. Praesent in nisi eleifend, pretium ipsum ut, mollis ex. Sed euismod ante mauris.',
            pages: 309,
            stock: false,
        },
        {
            id: "Fa3739f2-A567-43b0-95dd-02eb545aee79",
            title: "The Hobbit",
            author: "J. R. R. Tolkien",
            category: "Fantasy",
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar dictum massa, in mattis velit varius vel. Praesent in nisi eleifend, pretium ipsum ut, mollis ex. Sed euismod ante mauris.',
            pages: 310,
            stock: undefined,
        },
    ]);

    const [modalBook, setModalBook] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const storedBooks = localStorage.getItem("books");
        if (storedBooks) {
            setBooks(JSON.parse(storedBooks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books));
    }, [books]);


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const data = { books, setBooks, modalBook, setModalBook, isModalOpen, openModal, closeModal }

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
}

export const useBookData = () => useContext(BookContext);
