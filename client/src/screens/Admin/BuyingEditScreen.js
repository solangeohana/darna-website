import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Form, FormGroup, Input, Label, Button, CustomInput } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from 'components/Message'
import Loader from 'components/Loader'
import { UploadedImages, CoverPhoto } from 'components/imageManagement'


import FormContainer from 'components/FormContainer'
import { listBuyingDetails, updateBuying } from 'actions/buyingActions'
import {
  BUYING_UPDATE_RESET,
  BUYING_DETAILS_RESET,
} from 'constants/buyingConstants'

const BuyingEditScreen = ({ match, history }) => {
  const buyingId = match.params.id

  const [imagesFileInputKey, setImagesFileInputKey] = useState(0)

  const [name, setName] = useState('')
  const [title_en, setTitle_en] = useState('')
  const [title_de, setTitle_de] = useState('')
  const [coverPhoto, setCoverPhoto] = useState('')
  const [price, setPrice] = useState(0)
  const [sqm, setSqm] = useState(0)
  const [address, setAddress] = useState('')
  const [postalCode, setPostalCode] = useState(0)
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [available, setAvailable] = useState(true)
  const [description_en, setDescription_en] = useState('')
  const [description_de, setDescription_de] = useState('')
  const [feature1_en, setFeature1_en] = useState('')
  const [feature2_en, setFeature2_en] = useState('')
  const [feature3_en, setFeature3_en] = useState('')
  const [feature4_en, setFeature4_en] = useState('')
  const [feature5_en, setFeature5_en] = useState('')
  const [feature6_en, setFeature6_en] = useState('')
  const [feature1_de, setFeature1_de] = useState('')
  const [feature2_de, setFeature2_de] = useState('')
  const [feature3_de, setFeature3_de] = useState('')
  const [feature4_de, setFeature4_de] = useState('')
  const [feature5_de, setFeature5_de] = useState('')
  const [feature6_de, setFeature6_de] = useState('')

  const [images, setImages] = useState([])
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const userInfo = useSelector((state) => state.userLogin.userInfo)

  const buyingDetails = useSelector((state) => state.buyingDetails)
  const { loading, error, buying } = buyingDetails

  const buyingUpdate = useSelector((state) => state.buyingUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = buyingUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: BUYING_UPDATE_RESET })
      dispatch({ type: BUYING_DETAILS_RESET })
      history.push('/en/admin/buy')
    } else {
      if (!buying.name || buying._id !== buyingId) {
        dispatch(listBuyingDetails(buyingId))
      } else {
        setName(buying.name)
        setTitle_en(buying.title_en)
        setTitle_de(buying.title_de)
        setCoverPhoto(buying.coverPhoto)
        setPrice(buying.price)
        setSqm(buying.sqm)
        setAddress(buying.location.address)
        setPostalCode(buying.location.postalCode)
        setCity(buying.location.city)
        setCountry(buying.location.country)
        setAvailable(buying.available)
        setDescription_en(buying.description_en)
        setDescription_de(buying.description_de)
        setFeature1_en(buying.feature1_en)
        setFeature2_en(buying.feature2_en)
        setFeature3_en(buying.feature3_en)
        setFeature4_en(buying.feature4_en)
        setFeature5_en(buying.feature5_en)
        setFeature6_en(buying.feature6_en)
        setFeature1_de(buying.feature1_de)
        setFeature2_de(buying.feature2_de)
        setFeature3_de(buying.feature3_de)
        setFeature4_de(buying.feature4_de)
        setFeature5_de(buying.feature5_de)
        setFeature6_de(buying.feature6_de)

        if (buying.images) {
          console.log({ buying })
          setImages(buying.images || [])
        }
      }
    }
  }, [dispatch, history, buyingId, buying, successUpdate])

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

    formData.append('listingId', buyingId)
    formData.append('listingType', 'buy')

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
      updateBuying({
        _id: buyingId,
        name,
        title_en,
        title_de,
        coverPhoto,
        sqm,
        price,
        address,
        postalCode,
        city,
        country,
        available,
        description_en,
        description_de,
        feature1_en,
        feature2_en,
        feature3_en,
        feature4_en,
        feature5_en,
        feature6_en,
        feature1_de,
        feature2_de,
        feature3_de,
        feature4_de,
        feature5_de,
        feature6_de,
        images,
      })
    )
  }

  console.log({ images })

  return (
    <>
      <a href='/en/admin/buy'>
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
              <CoverPhoto src={coverPhoto} uploading={uploading} />
              <CustomInput
                id='image-file'
                type='file'
                onChange={uploadCoverPhotoHandler}></CustomInput>
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
              <Label className='title'>Price: </Label>
              <Input
                id='price'
                type='number'
                placeholder='Enter price without decimals or symbols'
                value={price || ''}
                onChange={(e) => setPrice(e.target.value)}></Input>
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
              <Label className='title'>Feature 1 DEUTSCH</Label>
              <Input
                id='feature1_de'
                type='text'
                placeholder='Enter feature 1 in german'
                value={feature1_de || ''}
                onChange={(e) => setFeature1_de(e.target.value)}></Input>
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
              <Label className='title'>Feature 2 DEUTSCH</Label>
              <Input
                id='feature2_de'
                type='text'
                placeholder='Enter feature 2 in german'
                value={feature2_de || ''}
                onChange={(e) => setFeature2_de(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
              <Label className='title'>Feature 3 ENGLISH:</Label>
              <Input
                id='feature3_en'
                type='text'
                placeholder='Enter feature 3 in english'
                value={feature3_en || ''}
                onChange={(e) => setFeature3_en(e.target.value)}></Input>
            </FormGroup>
            <FormGroup>
              <Label className='title'>Feature 3 DEUTSCH</Label>
              <Input
                id='feature3_de'
                type='text'
                placeholder='Enter feature 3 in german'
                value={feature3_de || ''}
                onChange={(e) => setFeature3_de(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
              <Label className='title'>Feature 4 ENGLISH:</Label>
              <Input
                id='feature4_en'
                type='text'
                placeholder='Enter feature 4 in english'
                value={feature4_en || ''}
                onChange={(e) => setFeature4_en(e.target.value)}></Input>
            </FormGroup>
            <FormGroup>
              <Label className='title'>Feature 4 DEUTSCH</Label>
              <Input
                id='feature4_de'
                type='text'
                placeholder='Enter feature 4 in german'
                value={feature4_de || ''}
                onChange={(e) => setFeature4_de(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
              <Label className='title'>Feature 5 ENGLISH:</Label>
              <Input
                id='feature5_en'
                type='text'
                placeholder='Enter feature 5 in english'
                value={feature5_en || ''}
                onChange={(e) => setFeature5_en(e.target.value)}></Input>
            </FormGroup>
            <FormGroup>
              <Label className='title'>Feature 5 DEUTSCH</Label>
              <Input
                id='feature5_de'
                type='text'
                placeholder='Enter feature 5 in german'
                value={feature5_de || ''}
                onChange={(e) => setFeature5_de(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
              <Label className='title'>Feature 6 ENGLISH:</Label>
              <Input
                id='feature6_en'
                type='text'
                placeholder='Enter feature 6 in english'
                value={feature6_en || ''}
                onChange={(e) => setFeature6_en(e.target.value)}></Input>
            </FormGroup>
            <FormGroup>
              <Label className='title'>Feature 6 DEUTSCH</Label>
              <Input
                id='feature6_de'
                type='text'
                placeholder='Enter feature 6 in german'
                value={feature6_de || ''}
                onChange={(e) => setFeature6_de(e.target.value)}></Input>
            </FormGroup>

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
              <Label for='images' className='title'>
                Photos
              </Label>
              <UploadedImages
                images={images}
                uploading={uploading}
                onRemove={(url) => {
                  setImages(images.filter((image) => image !== url))
                }}
              />
              <CustomInput
                id='image-file'
                key={imagesFileInputKey}
                type='file'
                multiple
                onChange={uploadImagesHandler}></CustomInput>
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

export default BuyingEditScreen
