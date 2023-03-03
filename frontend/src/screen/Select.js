import '../App.css';
import mainImg from '../img/main-img.png';
import { useNavigate } from "react-router-dom"; 

function Select() {
    let navigate = useNavigate();
  
    return (
        <div className="wrap">
        <div className='container'>
            <div id='container-contents'>
                <div className='sub-title'>랑피드
                </div>
                <div className='service-btn-container'>
                    <button className='service-btn'
                        onClick={() => {
                            navigate("/result");
                            }}>
                        <img src={mainImg} className="btn-img" alt="btn-img" />
                        매칭 결과 보기
                    </button>
                    <button className='service-btn'
                        onClick={() => {
                            navigate("/information");
                            }}>
                        <img src={mainImg} className="btn-img" alt="btn-img" />
                        내 정보 보기
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Select;