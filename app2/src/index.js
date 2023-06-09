import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
function Mytopbar()
{
  return (   <section id="topbar" class="d-flex align-items-center fixed-top topbar-transparent">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-center justify-content-lg-start">
      <i class="bi bi-phone d-flex align-items-center"><span>+1 5589 55488 55</span></i>
      <i class="bi bi-clock ms-4 d-none d-lg-flex align-items-center"><span>Mon-Sat: 11:00 AM - 23:00 PM</span></i>
    </div>
  </section>
);
}
function Myheader(){

  return(
    <>
  <header
    id="header"
    className="fixed-top d-flex align-items-center header-transparent"
  >
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <div className="logo me-auto">
        <h1>
          <a href="index.html">Delicious</a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      </div>
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li>
            <a className="nav-link scrollto active" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#menu">
              Menu
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#specials">
              Specials
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#events">
              Events
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#chefs">
              Chefs
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#gallery">
              Gallery
            </a>
          </li>
          <li className="dropdown">
            <a href="#">
              <span>Drop Down</span> <i className="bi bi-chevron-down" />
            </a>
            <ul>
              <li>
                <a href="#">Drop Down 1</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Deep Drop Down</span>{" "}
                  <i className="bi bi-chevron-right" />
                </a>
                <ul>
                  <li>
                    <a href="#">Deep Drop Down 1</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 4</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Drop Down 2</a>
              </li>
              <li>
                <a href="#">Drop Down 3</a>
              </li>
              <li>
                <a href="#">Drop Down 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="nav-link scrollto" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
      <a href="#book-a-table" className="book-a-table-btn scrollto">
        Book a table
      </a>
    </div>
  </header>

</>

  )
}
function Myhero(){
return(

<section id="hero">
  <div className="hero-container">
    <div
      id="heroCarousel"
      data-bs-interval={5000}
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <ol className="carousel-indicators" id="hero-carousel-indicators" />
      <div className="carousel-inner" role="listbox">
        {/* Slide 1 */}
        <div
          className="carousel-item active"
          style={{ backgroundImage: "url(%PUBLIC_URL%/Delicious/assets/img/slide/slide-1.jpg)" }}
        >
          <div className="carousel-container">
            <div className="carousel-content">
              <h2 className="animate__animated animate__fadeInDown">
                <span>Delicious</span> Restaurant
              </h2>
              <p className="animate__animated animate__fadeInUp">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                repellendus deleniti vel. Minus et tempore modi architecto.
              </p>
              <div>
                <a
                  href="#menu"
                  className="btn-menu animate__animated animate__fadeInUp scrollto"
                >
                  Our Menu
                </a>
                <a
                  href="#book-a-table"
                  className="btn-book animate__animated animate__fadeInUp scrollto"
                >
                  Book a Table
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Slide 2 */}
        <div
          className="carousel-item"
          style={{ backgroundImage: "url(%PUBLIC_URL%/Delicious/assets/img/slide/slide-2.jpg)" }}
        >
          <div className="carousel-container">
            <div className="carousel-content">
              <h2 className="animate__animated animate__fadeInDown">
                Lorem Ipsum Dolor
              </h2>
              <p className="animate__animated animate__fadeInUp">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                repellendus deleniti vel. Minus et tempore modi architecto.
              </p>
              <div>
                <a
                  href="#menu"
                  className="btn-menu animate__animated animate__fadeInUp scrollto"
                >
                  Our Menu
                </a>
                <a
                  href="#book-a-table"
                  className="btn-book animate__animated animate__fadeInUp scrollto"
                >
                  Book a Table
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Slide 3 */}
        <div
          className="carousel-item"
          style={{ backgroundImage: "url(%PUBLIC_URL%/Delicious/assets/img/slide/slide-3  .jpg)" }}
        >
          <div className="carousel-container">
            <div className="carousel-content">
              <h2 className="animate__animated animate__fadeInDown">
                Sequi ea ut et est quaerat
              </h2>
              <p className="animate__animated animate__fadeInUp">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                repellendus deleniti vel. Minus et tempore modi architecto.
              </p>
              <div>
                <a
                  href="#menu"
                  className="btn-menu animate__animated animate__fadeInUp scrollto"
                >
                  Our Menu
                </a>
                <a
                  href="#book-a-table"
                  className="btn-book animate__animated animate__fadeInUp scrollto"
                >
                  Book a Table
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#heroCarousel"
        role="button"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bi bi-chevron-left"
          aria-hidden="true"
        />
      </a>
      <a
        className="carousel-control-next"
        href="#heroCarousel"
        role="button"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon bi bi-chevron-right"
          aria-hidden="true"
        />
      </a>
    </div>
  </div>
</section>


)

}
function Myabout(){
return(

  <section id="about" className="about">
  <div className="container-fluid">
    <div className="row">
      <div
        className="col-lg-5 align-items-stretch video-box"
        style={{ backgroundImage: 'url("assets/img/about.jpg")' }}
      >
        <a
          href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
          className="venobox play-btn mb-4"
          data-vbtype="video"
          data-autoplay="true"
        />
      </div>
      <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
        <div className="content">
          <h3>
            Eum ipsam laborum deleniti{" "}
            <strong>velit pariatur architecto aut nihil</strong>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
            aute irure dolor in reprehenderit
          </p>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul>
            <li>
              <i className="bx bx-check-double" /> Ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </li>
            <li>
              <i className="bx bx-check-double" /> Duis aute irure dolor in
              reprehenderit in voluptate velit.
            </li>
            <li>
              <i className="bx bx-check-double" /> Ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate trideta storacalaperda mastiro dolore
              eu fugiat nulla pariatur.
            </li>
          </ul>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

)

}
function Mysinglewhyus(props){
  return(
    <div className="col-lg-4 mt-4 mt-lg-0">
        <div className="box">
          <span>{props.num}</span>
          <h4>{props.header}</h4>
          <p>
            {props.dis}
          </p>
        </div>
        </div>
  )
}
function Mywhyus(){
return(
  <section id="why-us" className="why-us">
  <div className="container">
    <div className="section-title">
      <h2>
        Why choose <span>Our Restaurant</span>
      </h2>
      <p>
        Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
        adipisci expedita at voluptas atque vitae autem.
      </p>
    </div>
    
    <div className="row">
     <Mysinglewhyus num='01' header='lorem ...' dis='      Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest'/>

     <Mysinglewhyus num='02' header='Repellat Nihil' dis='  Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis
            dolor quod et vel dire leno para dest'/>
      <Mysinglewhyus num='03' header='Ad ad velit qui' dis='   Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt
            debitis quo vel nam quis'/>
       
  </div>
  </div>
</section>

)

}
function Mysinglemanu(props){
  return(
    <div className="col-lg-6 menu-item filter-starters">
    <div className="menu-content">
      <a href="#">{props.name}</a>
      <span>{props.price}</span>
    </div>
    </div>
  )
}
function Mymanu(){
return(
  <section id="menu" className="menu">
  <div className="container">
    <div className="section-title">
      <h2>
        Check our tasty <span>Menu</span>
      </h2>
    </div>
    <div className="row">
      <div className="col-lg-12 d-flex justify-content-center">
        <ul id="menu-flters">
          <li data-filter="*" className="filter-active">
            Show All
          </li>
          <li data-filter=".filter-starters">Starters</li>
          <li data-filter=".filter-salads">Salads</li>
          <li data-filter=".filter-specialty">Specialty</li>
        </ul>
      </div>
    </div>
    <div className="row menu-container">

      <Mysinglemanu name='Lobster Bisque' price='$5.95'/>
      <Mysinglemanu name='Lobster Bisque' price='$5.95'/>
      <Mysinglemanu name='Bread barrel' price='$6.95'/>
      
      <Mysinglemanu name='Crab Cake' price='$7.95'/>
      
      <Mysinglemanu name='Caesar Selection' price='$8.95'/>
      
      <Mysinglemanu name='Mozzarella Stick' price='$4.95'/>
      <Mysinglemanu name='Greek Salad' price='$9.95'/>
      <Mysinglemanu name='Spinach Salad' price='$9.95'/>
      <Mysinglemanu name='Lobster Roll' price='$9.935'/>
      </div>
      </div>
      </section>

)

}
function Myspacia(){
  return(<section id="specials" className="specials">
  <div className="container">
    <div className="section-title">
      <h2>
        Check our <span>Specials</span>
      </h2>
      <p>
        Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
        adipisci expedita at voluptas atque vitae autem.
      </p>
    </div>
    <div className="row">
      <div className="col-lg-3">
        <ul className="nav nav-tabs flex-column">
          <li className="nav-item">
            <a
              className="nav-link active show"
              data-bs-toggle="tab"
              href="#tab-1"
            >
              Modi sit est
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
              Unde praesentium sed
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
              Pariatur explicabo vel
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
              Nostrum qui quasi
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
              Iusto ut expedita aut
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-9 mt-4 mt-lg-0">
        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Architecto ut aperiam autem id</h3>
                <p className="fst-italic">
                  Qui laudantium consequatur laborum sit qui ad sapiente dila
                  parde sonata raqer a videna mareta paulona marka
                </p>
                <p>
                  Et nobis maiores eius. Voluptatibus ut enim blanditiis atque
                  harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut
                  molestiae aut qui. Est repellat minima eveniet eius et quis
                  magni nihil. Consequatur dolorem quaerat quos qui similique
                  accusamus nostrum rem vero
                </p>
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img
                  src="assets/img/specials-1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-2">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Et blanditiis nemo veritatis excepturi</h3>
                <p className="fst-italic">
                  Qui laudantium consequatur laborum sit qui ad sapiente dila
                  parde sonata raqer a videna mareta paulona marka
                </p>
                <p>
                  Ea ipsum voluptatem consequatur quis est. Illum error ullam
                  omnis quia et reiciendis sunt sunt est. Non aliquid
                  repellendus itaque accusamus eius et velit ipsa voluptates.
                  Optio nesciunt eaque beatae accusamus lerode pakto madirna
                  desera vafle de nideran pal
                </p>
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img
                  src="assets/img/specials-2.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-3">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                <p className="fst-italic">
                  Eos voluptatibus quo. Odio similique illum id quidem non enim
                  fuga. Qui natus non sunt dicta dolor et. In asperiores velit
                  quaerat perferendis aut
                </p>
                <p>
                  Iure officiis odit rerum. Harum sequi eum illum corrupti culpa
                  veritatis quisquam. Neque necessitatibus illo rerum eum ut.
                  Commodi ipsam minima molestiae sed laboriosam a iste odio.
                  Earum odit nesciunt fugiat sit ullam. Soluta et harum
                  voluptatem optio quae
                </p>
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img
                  src="assets/img/specials-3.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-4">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>
                  Fuga dolores inventore laboriosam ut est accusamus laboriosam
                  dolore
                </h3>
                <p className="fst-italic">
                  Totam aperiam accusamus. Repellat consequuntur iure voluptas
                  iure porro quis delectus
                </p>
                <p>
                  Eaque consequuntur consequuntur libero expedita in voluptas.
                  Nostrum ipsam necessitatibus aliquam fugiat debitis quis
                  velit. Eum ex maxime error in consequatur corporis atque.
                  Eligendi asperiores sed qui veritatis aperiam quia a laborum
                  inventore
                </p>
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img
                  src="assets/img/specials-4.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-5">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                <p className="fst-italic">
                  Omnis blanditiis saepe eos autem qui sunt debitis porro quia.
                </p>
                <p>
                  Exercitationem nostrum omnis. Ut reiciendis repudiandae minus.
                  Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit
                  vero atque qui quibusdam amet. Occaecati sed est sint aut
                  vitae molestiae voluptate vel
                </p>
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img
                  src="assets/img/specials-5.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)
}

function Myevant(){
  return(
    <section id="events" className="events">
  <div className="container">
    <div className="section-title">
      <h2>
        Organize Your <span>Events</span> in our Restaurant
      </h2>
    </div>
    <div className="events-slider swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="row event-item">
            <div className="col-lg-6">
              <img
                src="assets/img/event-birthday.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h3>Birthday Parties</h3>
              <div className="price">
                <p>
                  <span>$189</span>
                </p>
              </div>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i className="bi bi-check-circle" /> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
                <li>
                  <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>
        </div>
        {/* End testimonial item */}
        <div className="swiper-slide">
          <div className="row event-item">
            <div className="col-lg-6">
              <img
                src="assets/img/event-private.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h3>Private Parties</h3>
              <div className="price">
                <p>
                  <span>$290</span>
                </p>
              </div>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i className="bi bi-check-circle" /> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
                <li>
                  <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>
        </div>
        {/* End testimonial item */}
        <div className="swiper-slide">
          <div className="row event-item">
            <div className="col-lg-6">
              <img
                src="assets/img/event-custom.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h3>Custom Parties</h3>
              <div className="price">
                <p>
                  <span>$99</span>
                </p>
              </div>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i className="bi bi-check-circle" /> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
                <li>
                  <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>
        </div>
        {/* End testimonial item */}
      </div>
      <div className="swiper-pagination" />
    </div>
  </div>
</section>

  )
}
function Mybook(){
  return(
<section id="book-a-table" className="book-a-table">
  <div className="container">
    <div className="section-title">
      <h2>
        Book a <span>Table</span>
      </h2>
      <p>
        Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
        adipisci expedita at voluptas atque vitae autem.
      </p>
    </div>
    <form
      action="forms/book-a-table.php"
      method="post"
      role="form"
      className="php-email-form"
    >
      <div className="row">
        <div className="col-lg-4 col-md-6 form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Your Name"
            data-rule="minlen:4"
            data-msg="Please enter at least 4 chars"
          />
          <div className="validate" />
        </div>
        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Your Email"
            data-rule="email"
            data-msg="Please enter a valid email"
          />
          <div className="validate" />
        </div>
        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
          <input
            type="text"
            className="form-control"
            name="phone"
            id="phone"
            placeholder="Your Phone"
            data-rule="minlen:4"
            data-msg="Please enter at least 4 chars"
          />
          <div className="validate" />
        </div>
        <div className="col-lg-4 col-md-6 form-group mt-3">
          <input
            type="text"
            name="date"
            className="form-control"
            id="date"
            placeholder="Date"
            data-rule="minlen:4"
            data-msg="Please enter at least 4 chars"
          />
          <div className="validate" />
        </div>
        <div className="col-lg-4 col-md-6 form-group mt-3">
          <input
            type="text"
            className="form-control"
            name="time"
            id="time"
            placeholder="Time"
            data-rule="minlen:4"
            data-msg="Please enter at least 4 chars"
          />
          <div className="validate" />
        </div>
        <div className="col-lg-4 col-md-6 form-group mt-3">
          <input
            type="number"
            className="form-control"
            name="people"
            id="people"
            placeholder="# of people"
            data-rule="minlen:1"
            data-msg="Please enter at least 1 chars"
          />
          <div className="validate" />
        </div>
      </div>
      <div className="form-group mt-3">
        <textarea
          className="form-control"
          name="message"
          rows={5}
          placeholder="Message"
          defaultValue={""}
        />
        <div className="validate" />
      </div>
      <div className="mb-3">
        <div className="loading">Loading</div>
        <div className="error-message" />
        <div className="sent-message">
          Your booking request was sent. We will call back or send an Email to
          confirm your reservation. Thank you!
        </div>
      </div>
      <div className="text-center">
        <button type="submit">Send Message</button>
      </div>
    </form>
  </div>
</section>

  )
  }
  function Mygallery()
  {
    return(<section id="gallery" className="gallery">
    <div className="container-fluid">
      <div className="section-title">
        <h2>
          Some photos from <span>Our Restaurant</span>
        </h2>
        <p>
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          adipisci expedita at voluptas atque vitae autem.
        </p>
      </div>
      <div className="row g-0">
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a
              href="assets/img/gallery/gallery-1.jpg"
              className="gallery-lightbox"
            >
              <img
                src="assets/img/gallery/gallery-1.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a
              href="assets/img/gallery/gallery-2.jpg"
              className="gallery-lightbox"
            >
              <img
                src="assets/img/gallery/gallery-2.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a
              href="assets/img/gallery/gallery-3.jpg"
              className="gallery-lightbox"
            >
              <img
                src="assets/img/gallery/gallery-3.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a
              href="assets/img/gallery/gallery-4.jpg"
              className="gallery-lightbox"
            >
              <img
                src="assets/img/gallery/gallery-4.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a
              href="assets/img/gallery/gallery-5.jpg"
              className="gallery-lightbox"
            >
              <img
                src="assets/img/gallery/gallery-5.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a
              href="assets/img/gallery/gallery-6.jpg"
              className="gallery-lightbox"
            >
              <img
                src="assets/img/gallery/gallery-6.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a
              href="assets/img/gallery/gallery-7.jpg"
              className="gallery-lightbox"
            >
              <img
                src="assets/img/gallery/gallery-7.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a
              href="assets/img/gallery/gallery-8.jpg"
              className="gallery-lightbox"
            >
              <img
                src="assets/img/gallery/gallery-8.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )

  }
  function Mychef(){
    return(<section id="chefs" className="chefs">
    <div className="container">
      <div className="section-title">
        <h2>
          Our Proffesional <span>Chefs</span>
        </h2>
        <p>
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          adipisci expedita at voluptas atque vitae autem.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="member">
            <div className="pic">
              <img
                src="assets/img/chefs/chefs-1.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="member-info">
              <h4>Walter White</h4>
              <span>Master Chef</span>
              <div className="social">
                <a href="">
                  <i className="bi bi-twitter" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="member">
            <div className="pic">
              <img
                src="assets/img/chefs/chefs-2.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="member-info">
              <h4>Sarah Jhonson</h4>
              <span>Patissier</span>
              <div className="social">
                <a href="">
                  <i className="bi bi-twitter" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="member">
            <div className="pic">
              <img
                src="assets/img/chefs/chefs-3.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="member-info">
              <h4>William Anderson</h4>
              <span>Cook</span>
              <div className="social">
                <a href="">
                  <i className="bi bi-twitter" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
  }
  function Mytestimonial()
  {
    return(
      <section id="testimonials" className="testimonials">
  <div className="container position-relative">
    <div
      className="testimonials-slider swiper"
      data-aos="fade-up"
      data-aos-delay={100}
    >
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="testimonial-item">
            <img
              src="assets/img/testimonials/testimonials-1.jpg"
              className="testimonial-img"
              alt=""
            />
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
            <div className="stars">
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
            </div>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              Proin iaculis purus consequat sem cure digni ssim donec porttitora
              entum suscipit rhoncus. Accusantium quam, ultricies eget id,
              aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
          </div>
        </div>
        {/* End testimonial item */}
        <div className="swiper-slide">
          <div className="testimonial-item">
            <img
              src="assets/img/testimonials/testimonials-2.jpg"
              className="testimonial-img"
              alt=""
            />
            <h3>Sara Wilsson</h3>
            <h4>Designer</h4>
            <div className="stars">
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
            </div>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              Export tempor illum tamen malis malis eram quae irure esse labore
              quem cillum quid cillum eram malis quorum velit fore eram velit
              sunt aliqua noster fugiat irure amet legam anim culpa.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
          </div>
        </div>
        {/* End testimonial item */}
        <div className="swiper-slide">
          <div className="testimonial-item">
            <img
              src="assets/img/testimonials/testimonials-3.jpg"
              className="testimonial-img"
              alt=""
            />
            <h3>Jena Karlis</h3>
            <h4>Store Owner</h4>
            <div className="stars">
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
            </div>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              Enim nisi quem export duis labore cillum quae magna enim sint
              quorum nulla quem veniam duis minim tempor labore quem eram duis
              noster aute amet eram fore quis sint minim.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
          </div>
        </div>
        {/* End testimonial item */}
        <div className="swiper-slide">
          <div className="testimonial-item">
            <img
              src="assets/img/testimonials/testimonials-4.jpg"
              className="testimonial-img"
              alt=""
            />
            <h3>Matt Brandon</h3>
            <h4>Freelancer</h4>
            <div className="stars">
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
            </div>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos
              export minim fugiat minim velit minim dolor enim duis veniam ipsum
              anim magna sunt elit fore quem dolore labore illum veniam.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
          </div>
        </div>
        {/* End testimonial item */}
        <div className="swiper-slide">
          <div className="testimonial-item">
            <img
              src="assets/img/testimonials/testimonials-5.jpg"
              className="testimonial-img"
              alt=""
            />
            <h3>John Larson</h3>
            <h4>Entrepreneur</h4>
            <div className="stars">
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
            </div>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
              veniam tempor noster veniam enim culpa labore duis sunt culpa
              nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum
              quid.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
          </div>
        </div>
        {/* End testimonial item */}
      </div>
      <div className="swiper-pagination" />
    </div>
  </div>
</section>


    )
  }
  function Mycontect()
  {
    return(
      <section id="contact" className="contact">
  <div className="container">
    <div className="section-title">
      <h2>
        <span>Contact</span> Us
      </h2>
      <p>
        Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
        adipisci expedita at voluptas atque vitae autem.
      </p>
    </div>
  </div>
  <div className="map">
    <iframe
      style={{ border: 0, width: "100%", height: 350 }}
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
      frameBorder={0}
      allowFullScreen=""
    />
  </div>
  <div className="container mt-5">
    <div className="info-wrap">
      <div className="row">
        <div className="col-lg-3 col-md-6 info">
          <i className="bi bi-geo-alt" />
          <h4>Location:</h4>
          <p>
            A108 Adam Street
            <br />
            New York, NY 535022
          </p>
        </div>
        <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
          <i className="bi bi-clock" />
          <h4>Open Hours:</h4>
          <p>
            Monday-Saturday:
            <br />
            11:00 AM - 2300 PM
          </p>
        </div>
        <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
          <i className="bi bi-envelope" />
          <h4>Email:</h4>
          <p>
            info@example.com
            <br />
            contact@example.com
          </p>
        </div>
        <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
          <i className="bi bi-phone" />
          <h4>Call:</h4>
          <p>
            +1 5589 55488 51
            <br />
            +1 5589 22475 14
          </p>
        </div>
      </div>
    </div>
    <form
      action="forms/contact.php"
      method="post"
      role="form"
      className="php-email-form"
    >
      <div className="row">
        <div className="col-md-6 form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Your Name"
            required=""
          />
        </div>
        <div className="col-md-6 form-group mt-3 mt-md-0">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Your Email"
            required=""
          />
        </div>
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          name="subject"
          id="subject"
          placeholder="Subject"
          required=""
        />
      </div>
      <div className="form-group mt-3">
        <textarea
          className="form-control"
          name="message"
          rows={5}
          placeholder="Message"
          required=""
          defaultValue={""}
        />
      </div>
      <div className="my-3">
        <div className="loading">Loading</div>
        <div className="error-message" />
        <div className="sent-message">
          Your message has been sent. Thank you!
        </div>
      </div>
      <div className="text-center">
        <button type="submit">Send Message</button>
      </div>
    </form>
  </div>
</section>

    )
  }
  function Myfooter(){
  return(<footer id="footer">
  <div className="container">
    <h3>Delicious</h3>
    <p>
      Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi
      fuga maxime saepe commodi placeat.
    </p>
    <div className="social-links">
      <a href="#" className="twitter">
        <i className="bx bxl-twitter" />
      </a>
      <a href="#" className="facebook">
        <i className="bx bxl-facebook" />
      </a>
      <a href="#" className="instagram">
        <i className="bx bxl-instagram" />
      </a>
      <a href="#" className="google-plus">
        <i className="bx bxl-skype" />
      </a>
      <a href="#" className="linkedin">
        <i className="bx bxl-linkedin" />
      </a>
    </div>
    <div className="copyright">
      © Copyright{" "}
      <strong>
        <span>Delicious</span>
      </strong>
      . All Rights Reserved
    </div>
    <div className="credits">
      {/* All the links in the footer should remain intact. */}
      {/* You can delete the links only if you purchased the pro version. */}
      {/* Licensing information: https://bootstrapmade.com/license/ */}
      {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/delicious-free-restaurant-bootstrap-theme/ */}
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </div>
</footer>
)
  }
function Page(){
  return(
    <div>
 <Mytopbar />

<Myheader />
<Myhero />
<main id="main">
  <Myabout />
  <Mywhyus/>
  <Mymanu/>
  <Myspacia/>
  <Myevant/>
  <Mybook/>
  <Mygallery/>
  <Mychef/>
  <Mytestimonial/>
  <Mycontect/>
  <Myfooter/>

</main>

    </div>
   
  )
  }
root.render(<Page />);









