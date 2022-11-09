//Dependencies import
import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadingSwitcher, cleanDetail, getDetail, pageSwitcher } from "../../redux/actions/index.js";
// Bootstrap Component
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// Components made with React
import Loader from '../Loader/Loader.jsx';
// Style in SCSS format
import Style from './Detail.module.scss'

//This is a component where all the info about the characters will rendered in a bootstrap card

const Detail = () => {
    //Hook to get de params of the route
    let { id } = useParams();
    const dispatch = useDispatch();

    // Global States called with Redux useDispatch Hook
    const detail = useSelector((state) => state.charDetail);
    const arrId = useSelector((state) => state.idArr)
    const isLoading = useSelector((state) => state.isLoading)


    // This is a conditional to fix an api error , the endpoint 17 doesnt exist so we use an auxiliar variable 
    let idFix = id
    if (id >= 17) idFix = ((id * 1) + 1)
    let name = arrId[id - 1].name
    let imgSource = `https://starwars-visualguide.com/assets/img/characters/${idFix}.jpg`



    useEffect(() => {

        document.title = `${name} | Star Wars`;
        dispatch(loadingSwitcher(true))
        dispatch(getDetail(idFix)).then(() => {
            dispatch(loadingSwitcher(false))
        })

        //a cleaner state function when the component is unmount
        return () => {
            dispatch(pageSwitcher(1))
            dispatch(cleanDetail())

        }

    }, [dispatch]);


    //Render the bootstrap card with the information that bring the getDetail Function
    return (


        <div className={Style.Container}>
            {isLoading ?
                <Loader />
                :
                <Card className={Style.Father} style={{ width: '80vw' }}>
                    <div className={Style.Left}>
                        <Card.Img variant="top" src={imgSource} />
                    </div>
                    <div className={Style.Right}>
                        <Card.Body>
                            <Card.Title className={Style.Title}>{detail.name}</Card.Title>
                            <Card.Text className={Style.text}>
                                Appears: {detail.films}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item className={Style.List}>Height: {detail.height}Cm</ListGroup.Item>
                            <ListGroup.Item className={Style.List}>Mass : {detail.mass}Kg</ListGroup.Item>
                            <ListGroup.Item className={Style.List}>Hair color: {detail.hair_color} </ListGroup.Item>
                            <ListGroup.Item className={Style.List}>Skin color: {detail.skin_color}</ListGroup.Item>
                            <ListGroup.Item className={Style.List}>Eyes color: {detail.eye_color}</ListGroup.Item>
                            <ListGroup.Item className={Style.List}>Birth year: {detail.birth_year}</ListGroup.Item>
                            <ListGroup.Item className={Style.List}>Gender : {detail.gender}</ListGroup.Item>
                            <ListGroup.Item className={Style.List}>Homeworld: {detail.homeworld}</ListGroup.Item>
                        </ListGroup>
                    </div>

                </Card>}

        </div>
    )
}

export default Detail