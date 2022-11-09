import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Loader from '../Loader/Loader.jsx';
import { loadingSwitcher, cleanDetail, getDetail,pageSwitcher } from "../../redux/actions/index.js";
import Style from './Detail.module.scss'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from "react-router-dom";


const Detail = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.charArr);
    const detail = useSelector((state) => state.charDetail);
    const isLoading = useSelector((state) => state.isLoading)
    


    let idFix = id
    if (id >= 17) idFix = ((id * 1) + 1)  // This is a conditional to fixe a api error , the endpoint 17 doesnt exist 



    let name = characters[idFix - 1]?.name


    let imgSource = `https://starwars-visualguide.com/assets/img/characters/${idFix}.jpg`



    useEffect(() => {
        if (!name) name = "Character Detail"
        document.title = `${name} | Star Wars`;
        dispatch(loadingSwitcher(true))
        dispatch(getDetail(idFix)).then(() => {
            dispatch(loadingSwitcher(false))
        })
        dispatch(pageSwitcher(1))
        return ()=>{
            dispatch(cleanDetail())

        }

    }, [dispatch]);

    return (

        
        <div className={Style.Container}>
            {isLoading?
            <Loader/>
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