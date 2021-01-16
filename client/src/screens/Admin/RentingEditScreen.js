import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Form, FormGroup, Input, Label, Button, CustomInput } from 'reactstrap'
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
  console.log('Render of RentingEditScreen')

  const rentingId = match.params.id

  const [imagesFileInputKey, setImagesFileInputKey] = useState(0)

  const [name, setName] = useState('')
  const [title_en, setTitle_en] = useState('')
  const [title_de, setTitle_de] = useState('')
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
  const [description_en, setDescription_en] = useState('')
  const [description_de, setDescription_de] = useState('')
  const [feature1_en, setFeature1_en] = useState('')
  const [feature2_en, setFeature2_en] = useState('')
  const [feature1_de, setFeature1_de] = useState('')
  const [feature2_de, setFeature2_de] = useState('')
  const [images, setImages] = useState([])
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const userInfo = useSelector((state) => state.userLogin.userInfo)

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
        setTitle_en(renting.title_en)
        setTitle_de(renting.title_de)
        setCoverPhoto(renting.coverPhoto)
        setNbRooms(renting.nbRooms)
        setSqm(renting.sqm)
        setFittedKitchen(renting.fittedKitchen)
        setBalcony(renting.balcony)
        setCellar(renting.cellar)
        setAddress(renting.location.address)
        setPostalCode(renting.location.postalCode)
        setCity(renting.location.city)
        setCountry(renting.location.country)
        setAvailable(renting.available)
        setDescription_en(renting.description_en)
        setDescription_de(renting.description_de)
        setFeature1_en(renting.feature1_en)
        setFeature2_en(renting.feature2_en)
        setFeature1_de(renting.feature1_de)
        setFeature2_de(renting.feature2_de)

        if (renting.images) {
          console.log({ renting })
          setImages(renting.images || [])
        }
      }
    }
  }, [dispatch, history, rentingId, renting, successUpdate])

  const uploadCoverPhotoHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('coverPhoto', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data', //to upload files, very important
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      const { data } = await axios.post(
        '/api/upload/coverPhoto',
        formData,
        config
      )

      setCoverPhoto(data.uri)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const uploadImagesHandler = async (e) => {
    const files = e.target.files
    const formData = new FormData()
    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i])
    }

    formData.append('rentingId', rentingId)

    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      const { data } = await axios.post('/api/upload/images', formData, config)

      setUploading(false)
      setImagesFileInputKey(imagesFileInputKey + 1)

        setImages([...images, ...data.images])
       
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
        title_en,
        title_de,
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
        description_en,
        description_de,
        feature1_en,
        feature2_en,
        feature1_de,
        feature2_de,
        images,
      })
    )
  }

  console.log({ images })

  return (
    <>
      <a href='/admin/rent'>
        <Button
          className='btn-round btn-white'
          color='info'
          type='button'
          size='lg'>
          GO BACK
        </Button>
      </a>

      <FormContainer>
        <h2 className='title'>Edit Listing</h2>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message color='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message color='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler} className='.form-control-lg'>
            <FormGroup>
              <Label className='title' for='name'>
                Name
              </Label>
              <Input
                id='name'
                type='text'
                placeholder='Enter name'
                value={name || ''}
                onChange={(e) => setName(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
              <Label className='title'>Title ENGLISH</Label>
              <Input
                id='title_en'
                type='text'
                placeholder='Enter title in english'
                value={title_en || ''}
                onChange={(e) => setTitle_en(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
              <Label className='title'>Title DEUTSCH</Label>
              <Input
                id='title_de'
                type='text'
                placeholder='Enter title in german'
                value={title_de || ''}
                onChange={(e) => setTitle_de(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
              <Label for='coverPhoto' className='title'>
                Cover Photo
              </Label>
              {/* <Input
                id='coverPhoto'
                type='text'
                placeholder='Enter image url'
                value={coverPhoto}
                onChange={(e) => setCoverPhoto(e.target.value)}></Input> */}
              <CustomInput
                id='image-file'
                type='file'
                onChange={uploadCoverPhotoHandler}></CustomInput>
              {uploading && <Loader />}
            </FormGroup>

            <FormGroup>
              <Label className='title'>Address</Label>
              <Input
                id='address'
                type='text'
                placeholder='Enter address'
                value={address || ''}
                onChange={(e) => setAddress(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
              <Label className='title'>Postal Code</Label>
              <Input
                id='postalCode'
                type='number'
                placeholder='Enter postal code'
                value={postalCode || ''}
                onChange={(e) => setPostalCode(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
              <Label className='title'>City</Label>
              <Input
                id='city'
                type='text'
                placeholder='Enter city'
                value={city || ''}
                onChange={(e) => setCity(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
              <Label className='title'>Country</Label>
              <Input
                id='country'
                type='text'
                placeholder='Enter country'
                value={country || ''}
                onChange={(e) => setCountry(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
              <Label className='title'>Number of Rooms: </Label>
              <Input
                id='nbRooms'
                type='number'
                placeholder='Enter number of rooms'
                value={nbRooms || ''}
                onChange={(e) => setNbRooms(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
              <Label className='title'>SQM: </Label>
              <Input
                id='sqm'
                type='number'
                placeholder='Enter sqm'
                value={sqm || ''}
                onChange={(e) => setSqm(e.target.value)}></Input>
            </FormGroup>
            <br />
            <FormGroup check>
              <Label check>
                <Input
                  id='fittedKitchen'
                  type='checkbox'
                  checked={fittedKitchen}
                  onChange={(e) => setFittedKitchen(e.target.checked)}></Input>
                <span className='form-check-sign'></span>
                Fitted Kitchen
              </Label>
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input
                  id='balcony'
                  type='checkbox'
                  checked={balcony}
                  onChange={(e) => setBalcony(e.target.checked)}></Input>
                <span className='form-check-sign'></span>
                Balcony
              </Label>
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input
                  id='cellar'
                  type='checkbox'
                  checked={cellar}
                  onChange={(e) => setCellar(e.target.checked)}></Input>
                <span className='form-check-sign'></span>
                Cellar
              </Label>
            </FormGroup>
            <br />
            <FormGroup>
              <Label className='title'>Description ENGLISH</Label>
              <Input
                id='description_en'
                type='textarea'
                placeholder='Enter description in english'
                value={description_en || ''}
                onChange={(e) => setDescription_en(e.target.value)}></Input>
            </FormGroup>
            <br />
            <FormGroup>
              <Label className='title'>Description DEUTSCH</Label>
              <Input
                id='description_de'
                type='textarea'
                placeholder='Enter description in german'
                value={description_de || ''}
                onChange={(e) => setDescription_de(e.target.value)}></Input>
            </FormGroup>
            <br />
            <FormGroup check>
              <Label check>
                <Input
                  id='available'
                  type='checkbox'
                  checked={available}
                  onChange={(e) => setAvailable(e.target.checked)}></Input>
                <span className='form-check-sign'></span>
                Available
              </Label>
            </FormGroup>
            <br />
            <FormGroup>
              <Label className='title'>Feature 1 ENGLISH:</Label>
              <Input
                id='feature1_en'
                type='text'
                placeholder='Enter feature 1 in english'
                value={feature1_en || ''}
                onChange={(e) => setFeature1_en(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
              <Label className='title'>Feature 2 ENGLISH:</Label>
              <Input
                id='feature2_en'
                type='text'
                placeholder='Enter feature 2 in english'
                value={feature2_en || ''}
                onChange={(e) => setFeature2_en(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
              <Label className='title'>Feature 1 DEUTSCH</Label>
              <Input
                id='feature1_de'
                type='text'
                placeholder='Enter feature 1 in german'
                value={feature1_de || ''}
                onChange={(e) => setFeature1_de(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
              <Label className='title'>Feature 2 DEUTSCH</Label>
              <Input
                id='feature2_de'
                type='text'
                placeholder='Enter feature 2 in german'
                value={feature2_de || ''}
                onChange={(e) => setFeature2_de(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
              <Label for='images' className='title'>
                Photos
              </Label>
              <ul>
                {images.map((path, i) => {
                  return (
                    <li key={i}>
                      {path}{' '}
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          setImages(images.filter((image) => image !== path))
                        }}>
                        remove
                      </button>
                    </li>
                  )
                })}
              </ul>
              
              <CustomInput
                id='image-file'
                key={imagesFileInputKey}
                type='file'
                multiple
                onChange={uploadImagesHandler}></CustomInput>
              {uploading && <Loader />}
            </FormGroup>

            <Button type='submit' className='btn-round btn-white' color='info'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default RentingEditScreen
