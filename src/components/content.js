import React from "react";

function Content() {
  return (
    <div class="tm-container">
      <div class="tm-row">
        <div class="tm-left">
          <div class="tm-left-inner">
            <div class="tm-site-header">
              <i class="fas fa-coffee fa-3x tm-site-logo"></i>
              <h1 class="tm-site-name">Wave Cafe</h1>
            </div>
            <nav class="tm-site-nav">
              <ul class="tm-site-nav-ul">
                <li class="tm-page-nav-item">
                  <a href="#drink" class="tm-page-link active">
                    <i class="fas fa-mug-hot tm-page-link-icon"></i>
                    <span>Drink Menu rrrr</span>
                  </a>
                </li>
                <li class="tm-page-nav-item">
                  <a href="#about" class="tm-page-link">
                    <i class="fas fa-users tm-page-link-icon"></i>
                    <span>About Us</span>
                  </a>
                </li>
                <li class="tm-page-nav-item">
                  <a href="#special" class="tm-page-link">
                    <i class="fas fa-glass-martini tm-page-link-icon"></i>
                    <span>Special Items</span>
                  </a>
                </li>
                <li class="tm-page-nav-item">
                  <a href="#contact" class="tm-page-link">
                    <i class="fas fa-comments tm-page-link-icon"></i>
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="tm-right">
          <main class="tm-main">
            <div id="drink" class="tm-page-content">
              <nav class="tm-black-bg tm-drinks-nav">
                <ul>
                  <li>
                    <a href="/" class="tm-tab-link active" data-id="cold">
                      مشروبات مثلجة
                    </a>
                  </li>
                  <li>
                    <a href="/" class="tm-tab-link" data-id="hot">
                      مشروبات ساخنة
                    </a>
                  </li>
                  <li>
                    <a href="/" class="tm-tab-link" data-id="juice">
                      فواكه مثلجة
                    </a>
                  </li>
                </ul>
              </nav>

              <div id="cold" class="tm-tab-content">
                <div class="tm-list">
                  <div class="tm-list-item">
                    <img
                      src="img/iced-americano.png"
                      alt="Image1"
                      class="tm-list-item-img"
                    />
                    <div class="tm-black-bg tm-list-item-text">
                      <h3 class="tm-list-item-name">
                        عرايسي
                        <span class="tm-list-item-price">$10.25</span>
                      </h3>
                      <p class="tm-list-item-description">
                        مشروب العرايسي اللذيذ 
                      </p>
                    </div>
                  </div>
                  <div class="tm-list-item">
                    <img
                      src="img/iced-cappuccino.png"
                      alt="Image1"
                      class="tm-list-item-img"
                    />
                    <div class="tm-black-bg tm-list-item-text">
                      <h3 class="tm-list-item-name">
                        كاباتشينو
                        <span class="tm-list-item-price">$12.50</span>
                      </h3>
                      <p class="tm-list-item-description">
                        كاباتشينو ولا اروع.
                      </p>
                    </div>
                  </div>
                  <div class="tm-list-item">
                    <img
                      src="img/iced-espresso.png"
                      alt="Image1"
                      class="tm-list-item-img"
                    />
                    <div class="tm-black-bg tm-list-item-text">
                      <h3 class="tm-list-item-name">
                        قهوة مثلجة
                        <span class="tm-list-item-price">$14.25</span>
                      </h3>
                      <p class="tm-list-item-description">
                        قهوة مثلجة مزاااج.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              <div id="hot" class="tm-tab-content">
                <div class="tm-list">
                  <div class="tm-list-item">
                    <img
                      src="img/hot-americano.png"
                      alt="Image1"
                      class="tm-list-item-img"
                    />
                    <div class="tm-black-bg tm-list-item-text">
                      <h3 class="tm-list-item-name">
                        موكاتشينو حار
                        <span class="tm-list-item-price">$8.50</span>
                      </h3>
                      <p class="tm-list-item-description">
                        موكاتشينو ساخن .
                      </p>
                    </div>
                  </div>
 
                </div>
              </div>

              <div id="juice" class="tm-tab-content">
                <div class="tm-list">
                  <div class="tm-list-item">
                    <img
                      src="img/smoothie-1.png"
                      alt="Image1"
                      class="tm-list-item-img"
                    />
                    <div class="tm-black-bg tm-list-item-text">
                      <h3 class="tm-list-item-name">
                        سموذي الفراولة
                        <span class="tm-list-item-price">$12.50</span>
                      </h3>
                      <p class="tm-list-item-description">
سموذي  الفراولة                      </p>
                    </div>
                  </div>
                  <div class="tm-list-item">
                    <img
                      src="img/smoothie-2.png"
                      alt="Image1"
                      class="tm-list-item-img"
                    />
                    <div class="tm-black-bg tm-list-item-text">
                      <h3 class="tm-list-item-name">
عصير الرمان                        <span class="tm-list-item-price">$14.50</span>
                      </h3>
                      <p class="tm-list-item-description">
عصير الرمان                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="about" class="tm-page-content">
              <div class="tm-black-bg tm-mb-20 tm-about-box-1">
                <h2 class="tm-text-primary tm-about-header">عن Wave Cafe</h2>
                <div class="tm-list-item tm-list-item-2">
                  <img
                    src="img/about-1.png"
                    alt="Image1"
                    class="tm-list-item-img tm-list-item-img-big"
                  />
                  <div class="tm-list-item-text-2">
                    <p>  اكل بيتي 100% </p>
                    <p>
                      
نقدم لكم اجمل و الذ الاكلات العربية في قلب مدينة مونتريال اكل بيتي 100%     
                   </p>
                 
                 
                  </div>
                </div>
              </div>
              <div class="tm-black-bg tm-mb-20 tm-about-box-2">
                <div class="tm-list-item tm-list-item-2">
                  <div class="tm-list-item-text-2">
                    <h2 class="tm-text-primary">بدايتنا</h2>
                    <p>
                     بدينا ب ساندويشة وفكرة وانتهينا بمشروع
                    </p>
                  </div>
                  <img
                    src="img/about-2.png"
                    alt="Image1"
                    class="tm-list-item-img tm-list-item-img-big tm-img-right"
                  />
                </div>
                <p>
                  Donec non urna elit. Quisque ut magna in dui mattis iaculis eu
                  finibus metus. Suspendisse vel mi a lacus finibus vehicula vel
                  ut diam. Nam pellentesque, mi quis ullamcorper.
                </p>
              </div>
            </div>

            <div id="special" class="tm-page-content">
              <div class="tm-special-items">
                <div class="tm-black-bg tm-special-item">
                  <img src="img/special-01.jpg" alt="Image1" />
                  <div class="tm-special-item-description">
                    <h2 class="tm-text-primary tm-special-item-title">
                      Special One
                    </h2>
                    <p class="tm-special-item-text">
                      Here is a short text description for the first special
                      item. You are not allowed to redistribute this template
                      ZIP file.
                    </p>
                  </div>
                </div>
                <div class="tm-black-bg tm-special-item">
                  <img src="img/special-02.jpg" alt="Image1" />
                  <div class="tm-special-item-description">
                    <h2 class="tm-text-primary tm-special-item-title">
                      Second Item
                    </h2>
                    <p class="tm-special-item-text">
                      You are allowed to download, modify and use this template
                      for your commercial or non-commercial websites.
                    </p>
                  </div>
                </div>
                <div class="tm-black-bg tm-special-item">
                  <img src="img/special-03.jpg" alt="Image1" />
                  <div class="tm-special-item-description">
                    <h2 class="tm-text-primary tm-special-item-title">
                      Third Special Item
                    </h2>
                    <p class="tm-special-item-text">
                      Pellentesque in ultrices mi, quis mollis nulla. Quisque
                      sed commodo est, quis tincidunt nunc.
                    </p>
                  </div>
                </div>
                <div class="tm-black-bg tm-special-item">
                  <img src="img/special-04.jpg" alt="Image1" />
                  <div class="tm-special-item-description">
                    <h2 class="tm-text-primary tm-special-item-title">
                      Special Item Fourth
                    </h2>
                    <p class="tm-special-item-text">
                      Vivamus finibus nulla sed metus sagittis, sed ultrices
                      magna aliquam. Mauris fermentum.
                    </p>
                  </div>
                </div>
                <div class="tm-black-bg tm-special-item">
                  <img src="img/special-05.jpg" alt="Image1" />
                  <div class="tm-special-item-description">
                    <h2 class="tm-text-primary tm-special-item-title">
                      Sixth Sense
                    </h2>
                    <p class="tm-special-item-text">
                      Here is a short text description for sixth item. This text
                      is four lines.
                    </p>
                  </div>
                </div>
                <div class="tm-black-bg tm-special-item">
                  <img src="img/special-06.jpg" alt="Image1" />
                  <div class="tm-special-item-description">
                    <h2 class="tm-text-primary tm-special-item-title">
                      Seventh Item
                    </h2>
                    <p class="tm-special-item-text">
                      Curabitur eget erat sit amet sapien aliquet vulputate quis
                      sed arcu.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="contact" class="tm-page-content">
              <div class="tm-black-bg tm-contact-text-container">
                <h2 class="tm-text-primary">Contact Wave</h2>
                <p>
                  Wave Cafe Template has a video background. You can use this
                  layout for your websites. Please contact Tooplate's Facebook
                  page. Tell your friends about our website.
                </p>
              </div>
              <div class="tm-black-bg tm-contact-form-container tm-align-right">
                <form action="" method="POST" id="contact-form">
                  <div class="tm-form-group">
                    <input
                      type="text"
                      name="name"
                      class="tm-form-control"
                      placeholder="Name"
                      required=""
                    />
                  </div>
                  <div class="tm-form-group">
                    <input
                      type="email"
                      name="email"
                      class="tm-form-control"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div class="tm-form-group tm-mb-30">
                    <textarea
                      rows="6"
                      name="message"
                      class="tm-form-control"
                      placeholder="Message"
                      required=""
                    ></textarea>
                  </div>
                  <div>
                    <button type="submit" class="tm-btn-primary tm-align-right">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
      <footer class="tm-site-footer">
        <p class="tm-black-bg tm-footer-text">
          <a
            href="https://github.com/Mhamitay/wavecofe"
            class="tm-footer-link"
            rel=""
            target="_parent"
          >
            Copyright 2020 Wave Cafe | Hammad
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Content;
