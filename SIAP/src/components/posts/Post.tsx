import './Post.css'

const Post = () => {
  return (
    <>
      <div className="scrollabe">
        <div className="post-container">
            <div className="user-info">
              <img src="../../src/assets/user-photo.png" alt="photo"/>
              <div className="username">
                <h3>Nome de Usuário</h3>
                <h4>Campus X</h4>
              </div>
            </div>
            <div className="post-content">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam dolore, quae quos ut a cumque atque aliquam nesciunt?</p>
            </div>
        </div>

        <div className="post-container">
            <div className="user-info">
              <img src="../../src/assets/user-photo.png" alt="photo"/>
              <div className="username">
                <h3>Nome de Usuário</h3>
                <h4>Campus X</h4>
              </div>
            </div>
            <div className="post-content">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam dolore, quae quos ut a cumque atque aliquam nesciunt?</p>
            </div>
        </div>
        <div className="post-container">
            <div className="user-info">
              <img src="../../src/assets/user-photo.png" alt="photo"/>
              <div className="username">
                <h3>Nome de Usuário</h3>
                <h4>Campus X</h4>
              </div>
            </div>
            <div className="post-content">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam dolore, quae quos ut a cumque atque aliquam nesciunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptates labore ab eveniet maxime explicabo eum vel iusto? Nisi quae perferendis ipsum maxime dolor dicta unde eaque non velit saepe.</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Post
