//Dependencies import
import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getCharacter, pageSwitcher, loadingSwitcher, searchCharacter, cleanerFinded } from "../../redux/actions/index.js";

// Bootstrap Component
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// Style in SCSS format
import Style from './Searchbar.module.scss'
// Img Import
import SearchIcon from "../../img/search.svg"

//Reusable SearchBar Component, recive a function by props that will called on submmit
const Searchbar = ({ handle }) => {
    const isLoading = useSelector((state) => state.isLoading)
    const dispatch = useDispatch();

    //Hook to redirect 
    const navigate = useHistory();
    //Local State to set change on text input
    const [texto, setTexto] = useState("")
    const handleChange = (e) => {
        setTexto(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handle(texto).then(() => navigate.push("/"))
        dispatch(loadingSwitcher(true))

        e.target.reset()
    }

    return (
        <Form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
            <Form.Control id={Style.sInput}
                onChange={(e) => handleChange(e)}
                type="search"
                placeholder="Search a Character"
                className="rounded-left"
            />
            <Button type='submit' className={Style.sButton}><img src={SearchIcon} alt="Search Icon" /></Button>
        </Form>

    )
}

export default Searchbar