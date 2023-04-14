import React from 'react';
import { Carousel, Button } from 'antd';
import { Link } from 'react-router-dom';


const HomePage = () => {
    const goToPage = () => {
        // Thay đổi đường dẫn trang web tại đây
        window.location.href = "https://www.google.com";
    }

    return (
        <div>
            <Carousel autoplay>
                <div>
                    <img src="https://res.cloudinary.com/db5szckya/image/upload/v1677058065/z4129467658967_c11bbb8953b1a3c89d07c445098eb608_c67ime.jpg" alt="Banner 1" />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/db5szckya/image/upload/v1677058065/z4129467658967_c11bbb8953b1a3c89d07c445098eb608_c67ime.jpg" alt="Banner 2" />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/db5szckya/image/upload/v1677058065/z4129467658967_c11bbb8953b1a3c89d07c445098eb608_c67ime.jpg" alt="Banner 3" />
                </div>
            </Carousel>

            <div style={{ textAlign: "center", marginTop: "30px" }}>
            <Button className="bg-primary">
            <Link to={"/admin/signin"}>Chuyến đến trang login</Link>
          </Button> <br />
            </div> <br />
        </div>
    )
}

export default HomePage;
