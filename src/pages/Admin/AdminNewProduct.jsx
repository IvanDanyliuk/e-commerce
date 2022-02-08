import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { 
  getStorage, 
  ref, 
  uploadBytesResumable, 
  getDownloadURL 
} from "firebase/storage";
import FirebaseApp from '../../firebase';
import styled from 'styled-components';
import { addProduct } from '../../redux/apiCalls';

const Container = styled.div``;

const Title = styled.h3``;

const NewProductForm = styled.form`
  padding: 10px 0;
`;

const FormFieldSet = styled.fieldset`
  margin: 10px 0;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  border: none;
`;

const FormLabel = styled.label`
  margin-right: 20px;
  width: 100px;
  font-weight: 500;
`;

const FormInput = styled.input`
  margin: 0;
  padding: ${props => props.type !== 'file' && '5px 10px'};
  width: 50%;
`;

const FormSelect = styled.select`
  padding: 5px 10px;
`;

const FormSelectOption = styled.option``;

const SubmitButton = styled.button`
  margin-top: 20px;
  width: 90px;
  height: 36px;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  background-color: #03d56c;
  color: #ffffff;
  cursor: pointer;
`;

const AdminNewProduct = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);

  const handleInputChange = e => {
    setInputs(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    });
  };

  const handleMultipleValuesChange = e => {
    if(e.target.name === 'categories') {
      setCategories(e.target.value.split(','));
    } else {
      setSizes(e.target.value.split(','))
    }
  }

  const handleSubmitClick = e => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(FirebaseApp);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            console.log('Default');
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {...inputs, img: downloadURL, categories, sizes};
          addProduct(product, dispatch);
        });
      }
    );
  }

  console.log(inputs, file, categories, sizes)

  return (
    <Container>
      <Title>Create a new product</Title>
      <NewProductForm>
        <FormFieldSet>
          <FormLabel>Add image</FormLabel>
          <FormInput id='file' type="file" onChange={(e) => setFile(e.target.files[0])} />
        </FormFieldSet>
        <FormFieldSet>
          <FormLabel>Title</FormLabel>
          <FormInput name='title' type="text" placeholder="Title" onChange={handleInputChange} />
        </FormFieldSet>
        <FormFieldSet>
          <FormLabel>Description</FormLabel>
          <FormInput name='desc' type="text" placeholder="Description" onChange={handleInputChange} />
        </FormFieldSet>
        <FormFieldSet>
          <FormLabel>Price</FormLabel>
          <FormInput name='price' type="number" placeholder="$" onChange={handleInputChange} />
        </FormFieldSet>
        <FormFieldSet>
          <FormLabel>Categories</FormLabel>
          <FormInput name='categories' type="text" placeholder="tshirts,hoodie" onChange={handleMultipleValuesChange} />
        </FormFieldSet>
        <FormFieldSet>
          <FormLabel>Sizes</FormLabel>
          <FormInput name='sizes' type="text" placeholder="XS,S,M,..." onChange={handleMultipleValuesChange} />
        </FormFieldSet>
        <FormFieldSet>
          <FormLabel>Color</FormLabel>
          <FormInput name='color' type="text" placeholder="purple" onChange={handleInputChange} />
        </FormFieldSet>
        <FormFieldSet>
          <FormLabel>In stock</FormLabel>
          <FormSelect name='inStock' onChange={handleInputChange}>
            <FormSelectOption value='true'>Yes</FormSelectOption>
            <FormSelectOption value='false'>No</FormSelectOption>
          </FormSelect>
        </FormFieldSet>
        <SubmitButton onClick={handleSubmitClick}>Create</SubmitButton>
      </NewProductForm>
    </Container>
  );
};

export default AdminNewProduct;
