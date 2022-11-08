import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SearchIcon from "../../img/search.svg"
import Style from './Searchbar.module.scss'

const Searchbar = ({ handle }) => {
    const [texto, setTexto] = useState("")
    const handleChange = (e) => {
        setTexto(e.target.value)
    }
    const handleSubmit = (e) => {

        e.preventDefault();
        handle(texto)

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