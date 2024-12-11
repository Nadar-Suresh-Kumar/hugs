import React from 'react';
import './App.css';

const spaces = [
  { title: "YOLO",
    author: "Open AI",
    likes: 327,
    days_ago: 11,
    color: "blue",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiqjuDs-QUK5yZgtYllrXzCYntGGLpu334oV6ogXyf7BI0-yCozqQYTeUNrlgQTrfOUj8&usqp=CAU",
    url: "https://huggingface.co/spaces/sureshimprint/YOLO"
  },
  { title: "Stable diffusion",
    author: "Stability",
    likes: 11,
    days_ago: 5,
    color: "green",
    image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/spaces/stabilityai/stable-diffusion.png",
    url: "https://huggingface.co/spaces/sureshimprint/okay"
  },
  { title: "Live Potrait",
    author: "kwaiVGI",
    likes: 1,
    days_ago: 9,
    color: "purple",
    image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/spaces/fffiloni/liveportrait-vid2vid.png",
    url: "https://livepotrait.streamlit.app/"
  },
  { title: "Doc's Reader",
    author: "merve",
    likes: 839,
    days_ago: 6,
    color: "red",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC0m5VaLjGyV6ux2uxEC-o-0x5ouHfzXFaQg&s",
    url: "https://document-app-vmwpun1iqy.streamlit.app/"
  },
  { title: "Chat Bot",
    author: "john_doe",
    likes: 119,
    days_ago: 3,
    color: "yellow",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7M_JTPcZaLTMgX1_dH4a-2q0BP_hJyr-19w&s",
    url: "https://huggingface.co/spaces/sureshimprint/chatbot"
  },
  { title: "Difftoon",
    author: "artificalguybr",
    likes: 74,
    days_ago: 2,
    color: "orange",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNMIa0ACq6Nlr3FrFhklpiAEm1DxbxeeXj6w&s",
    url: "https://imgtoimg.streamlit.app/"
  },
  { title: "Music Gen",
    author: "facebook",
    likes: 119, days_ago: 3,
    color: "yellow",
    image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/spaces/facebook/MusicGen.png",
    url: "https://musicgen.streamlit.app/"
  },

];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Spaces</h1>
        <h2>Discover amazing AI apps made by the community!</h2>

        <h3>Spaces of the week 🔥</h3>
        <div className="card-container">
          {spaces.map((space, index) => (
            <a href={space.url} key={index} className="card" style={{ borderLeft: `5px solid ${space.color}` }} target="_blank" rel="noopener noreferrer">
              <img src={space.image} alt={space.title} className="card-image" />
              <div className="card-header">{space.title}</div>
              <div className="card-body">
                <p>Author: {space.author}</p>
                <p>Likes: {space.likes}</p>
              </div>
              <div className="card-footer">
                <p>{space.days_ago} days ago</p>
              </div>
            </a>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
