import { useEffect, useState } from 'react';
import './App.css';
import { storage } from './firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

function App() {

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imageListRef = ref(storage, "images/")

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snap) => {
      getDownloadURL(snap.ref).then((url) => {
        setImageUrls((prev) => [...prev, url])
      });

    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      const urls = []; // Create a new array to hold the URLs
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          urls.push(url);
        });
      });

      // Set the imageUrls to the new array directly
      setImageUrls(urls);
    });
  }, []);

  return (
    <div className="App">
      <input type="file" onChange={(event) => { setImageUpload(event.target.files[0]) }} />
      <button onClick={uploadImage}>Upload Image</button>
      {imageUrls.map((url) => {
        return <img src={url} alt="NA" />
      })}
    </div>
  );
}

export default App;
