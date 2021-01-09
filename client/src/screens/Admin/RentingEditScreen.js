import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import FormContainer from '../../components/FormContainer'
import { listRentingDetails, updateRenting } from '../../actions/rentingActions'
import {
  RENTING_UPDATE_RESET,
  RENTING_DETAILS_RESET,
} from '../../constants/rentingConstants'

const RentingEditScreen = ({ match, history }) => {
  const rentingId = match.params.id

  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [coverPhoto, setCoverPhoto] = useState('')
  const [nbRooms, setNbRooms] = useState(0)
  const [sqm, setSqm] = useState(0)
  const [fittedKitchen, setFittedKitchen] = useState(false)
  const [balcony, setBalcony] = useState(false)
  const [cellar, setCellar] = useState(false)
  const [address, setAddress] = useState('')
  const [postalCode, setPostalCode] = useState(0)
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [available, setAvailable] = useState(true)
  const [description, setDescription] = useState('')
  const [feature1, setFeature1] = useState('')
  const [feature2, setFeature2] = useState('')
  const [uploading, setUploading] = useState(false)

  
//   const [location, setLocation] = useState({
//     address: '',
//     postalCode: 0,
//     city: '',
//     country: '',
//   })
    

  const dispatch = useDispatch()

  const rentingDetails = useSelector((state) => state.rentingDetails)
  const { loading, error, renting } = rentingDetails

  const rentingUpdate = useSelector((state) => state.rentingUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = rentingUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: RENTING_UPDATE_RESET })
      dispatch({ type: RENTING_DETAILS_RESET })
      history.push('/admin/rent')
    } else {
      if (!renting.name || renting._id !== rentingId) {
        dispatch(listRentingDetails(rentingId))
      } else {
        setName(renting.name)
        setTitle(renting.title)
        setCoverPhoto(renting.coverPhoto)
        setNbRooms(renting.nbRooms)
        setSqm(renting.sqm)
        setFittedKitchen(renting.fittedKitchen)
        setBalcony(renting.balcony)
        setCellar(renting.cellar)
        setAddress(renting.address)
        setPostalCode(renting.postalCode)
        setCity(renting.city)
        setCountry(renting.country)
        setAvailable(renting.available)
        setDescription(renting.description)
        setFeature1(renting.feature1)
        setFeature2(renting.feature2)
      }
    }
  }, [dispatch, history, rentingId, renting, successUpdate])

  
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('coverPhoto', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data', //to upload files, very important
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setCoverPhoto(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateRenting({
        _id: rentingId,
        name,
        title,
        coverPhoto,
        nbRooms,
        sqm,
        fittedKitchen,
        balcony,
        cellar,
        address,
        postalCode,
        city,
        country,
        available,
        description,
        feature1,
        feature2,
      })
    )
  }

  return (
    <>
      <Link to='/admin/rent' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Listing</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message color='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message color='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='coverPhoto'>
              <Form.Label>Cover Photo:</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={coverPhoto}
                onChange={(e) => setCoverPhoto(e.target.value)}></Form.Control>
              <Form.File
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='address'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter address'
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='postalCode'>
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter postal code'
                value={postalCode}
                required
                onChange={(e) => setPostalCode(e.target.value)}></Form.Control>
            </Form.Group>


            <Form.Group controlId='city'>
              <Form.Label>City</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter city'
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='country'>
              <Form.Label>Country</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter country'
                value={country}
                required
                onChange={(e) => setCountry(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='nbRooms'>
              <Form.Label>Number of Rooms: </Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter number of rooms'
                value={nbRooms}
                onChange={(e) => setNbRooms(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='sqm'>
              <Form.Label>SQM: </Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter sqm'
                value={sqm}
                onChange={(e) => setSqm(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='fittedKitchen'>
              <Form.Check
                type='checkbox'
                label='Fitted Kitchen'
                checked={fittedKitchen}
                onChange={(e) =>
                  setFittedKitchen(e.target.checked)
                }></Form.Check>
            </Form.Group>

            <Form.Group controlId='balcony'>
              <Form.Check
                type='checkbox'
                label='Balcony'
                checked={balcony}
                onChange={(e) => setBalcony(e.target.checked)}></Form.Check>
            </Form.Group>

            <Form.Group controlId='cellar'>
              <Form.Check
                type='checkbox'
                label='Cellar'
                checked={cellar}
                onChange={(e) => setCellar(e.target.checked)}></Form.Check>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='available'>
              <Form.Check
                type='checkbox'
                label='Available'
                checked={available}
                onChange={(e) => setAvailable(e.target.checked)}></Form.Check>
            </Form.Group>

            <Form.Group controlId='feature1'>
              <Form.Label>Feature 1:</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter feature 1'
                value={feature1}
                onChange={(e) => setFeature1(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='feature2'>
              <Form.Label>Feature 2:</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter feature 2'
                value={feature2}
                onChange={(e) => setFeature2(e.target.value)}></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default RentingEditScreen
