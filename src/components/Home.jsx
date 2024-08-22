import React from 'react';
import {
  IoMenuSharp,
  IoPricetagOutline,
  IoArrowForwardCircle,
  IoAdd,
} from 'react-icons/io5';
import {
  FaTachometerAlt,
  FaBook,
  FaChevronDown,
  FaChevronLeft,
  FaMicrophone,
  FaGraduationCap,
  FaDownload,
  FaRegLightbulb,
} from 'react-icons/fa';
import { HiMinus } from 'react-icons/hi2';
import { FiEdit } from 'react-icons/fi';
import { CiHeart } from 'react-icons/ci';
import { BsChat } from 'react-icons/bs';
import { FaGears, FaChartPie } from 'react-icons/fa6';
import { AiFillDashboard } from 'react-icons/ai';
import './components.css';

const Home = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const name = 'NYANDUSI NYAKERAMBA';
  console.log(name);
  const data = [
    {
      id: 1,
      name: 'Admission No',
      details: '1061287',
    },
    {
      id: 2,
      name: 'Id/Passport',
      details: '160505696',
    },
    {
      id: 3,
      name: 'Full Name',
      details: 'NYANDUSI NYAKERAMBA',
    },
    {
      id: 4,
      name: 'Gender',
      details: 'Male',
    },
    {
      id: 5,
      name: 'Date of Birth',
      details: '07/11/05',
    },
    {
      id: 6,
      name: 'Phone Number',
      details: '0758749693',
    },
    {
      id: 7,
      name: 'Email Address',
      details: 'NYANDUSIgriffins@gmail.com',
    },
    {
      id: 8,
      name: 'Postal Address',
      details: '100',
    },
  ];

  const toggleSidebar = () => {
    setMenuOpen(!menuOpen);
    const menubar = document.querySelector('.menubar');
    const profile = document.querySelector('.profile');

    menubar.style.width = menuOpen ? '230px' : '0px';
    profile.style.paddingLeft = menuOpen ? '230px' : '0';
    profile.style.width = menuOpen ? '350px' : 'auto';
    profile.style.overflowX = menuOpen ? 'hidden' : 'viscible';
  };

  return (
    <div className="homepage">
      <div className="header">
        <p className="title">
          <strong fontWeight="700">CUEA</strong>
          {' '}
          Students Portal
        </p>
        <div className="rowtwo">
          <IoMenuSharp onClick={toggleSidebar} size={20} color="#fff" />
          <div className="settings">
            <img
              src="https://studentportal.cuea.edu/images/logo.png"
              alt="schoollogo"
              width="25px"
              height="25px"
              style={{ borderRadius: '50%', marginRight: '15px' }}
            />
            <FaGears size={20} color="#fff" />
          </div>
        </div>
      </div>
      <div className="mainsection" style={{}}>
        {/* menubar */}
        <div
          className="menubar"
          style={{
            width: '0px',
            backgroundColor: 'rgb(212, 215, 217)',
            position: 'fixed',
            height: '100vh',
            zIndex: '1',
            top: '88px',
            left: '0',
            overflowX: 'hidden',
            transition: '0.5s',
            paddingTop: '15px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 15px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '6px',
              }}
            >
              <AiFillDashboard style={{}} size={19} color="rgb(0, 115, 183)" />
              <p
                style={{
                  fontSize: '14px',
                  color: '#000',
                  margin: '0',
                }}
              >
                Dashboard
              </p>
            </div>
            <div />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 15px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '6px',
              }}
            >
              <FaChartPie style={{}} size={19} color="rgb(221, 75, 57)" />
              <p
                style={{
                  fontSize: '14px',
                  color: '#000',
                  margin: '0',
                }}
              >
                Financials
              </p>
            </div>
            <FaChevronLeft
              style={{
                width: 'auto',
              }}
              size={12}
              color="#777777"
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 15px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '6px',
              }}
            >
              <FaGraduationCap style={{}} size={19} color="rgb(243, 156, 18)" />
              <p
                style={{
                  fontSize: '14px',
                  color: '#000',
                  margin: '0',
                }}
              >
                Academics
              </p>
            </div>
            <FaChevronLeft
              style={{
                width: 'auto',
              }}
              size={12}
              color="#777777"
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 15px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '6px',
              }}
            >
              <FaDownload style={{}} size={19} color="rgb(221, 75, 57)" />
              <p
                style={{
                  fontSize: '14px',
                  color: '#000',
                  margin: '0',
                }}
              >
                Downloads
              </p>
            </div>
            <FaChevronLeft
              style={{
                width: 'auto',
              }}
              size={12}
              color="#777777"
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 15px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '6px',
              }}
            >
              <FaRegLightbulb
                style={{
                  transform: 'rotate(1turn)',
                }}
                size={19}
                color="rgb(0, 0, 0)"
              />
              <p
                style={{
                  fontSize: '14px',
                  color: '#000',
                  margin: '0',
                }}
              >
                Students Clearance
              </p>
            </div>
            <FaChevronLeft
              style={{
                width: 'auto',
              }}
              size={12}
              color="#777777"
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 15px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '6px',
              }}
            >
              <FaRegLightbulb
                style={{
                  transform: 'rotate(1turn)',
                }}
                size={19}
                color="rgb(0, 0, 0)"
              />
              <p
                style={{
                  fontSize: '14px',
                  color: '#000',
                  margin: '0',
                }}
              >
                Student Issues
              </p>
            </div>
            <FaChevronLeft
              style={{
                width: 'auto',
              }}
              size={12}
              color="#777777"
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 15px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '6px',
              }}
            >
              <FaGears
                style={{}}
                size={19}
                color="rgb(0, 115, 183)
"
              />
              <p
                style={{
                  fontSize: '14px',
                  color: '#000',
                  margin: '0',
                }}
              >
                Settings
              </p>
            </div>
            <FaChevronLeft
              style={{
                width: 'auto',
              }}
              size={12}
              color="#777777"
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 15px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '6px',
              }}
            >
              <div />
              <p
                style={{
                  fontSize: '12px',
                  color: 'rgb(75, 100, 111)',
                  margin: '0',
                  padding: '0',
                }}
              >
                PERIODIC ACTIVITIES
              </p>
            </div>
            <div />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 15px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '6px',
              }}
            >
              <FaMicrophone style={{}} size={19} color="rgb(243, 156, 18)" />
              <p
                style={{
                  fontSize: '14px',
                  color: '#000',
                  margin: '0',
                }}
              >
                Lecturers Evaluation
              </p>
            </div>
            <FaChevronLeft
              style={{
                width: 'auto',
              }}
              size={12}
              color="#777777"
            />
          </div>
        </div>
        {/* Profile section */}
        <div
          className="profile"
          style={{
            display: 'block',
            transition: '0.5s',
            overflowX: 'hidden',
          }}
        >
          <p className="maintitle">Dashboard</p>
          <div className="extratext">
            <FaTachometerAlt size={14} color="#000" />
            <p
              style={{ fontSize: '12px', marginLeft: '7px', color: '#777777' }}
            >
              <strong style={{ color: '#333333' }}> Dashboard</strong>
              {' '}
              &gt;
              Dashboard
            </p>
          </div>
          <div className="cards">
            <div className="card">
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  backgroundColor: 'rgb(243, 156, 18)',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <IoPricetagOutline size={45} color="#fff" />
              </div>
              <div className="cardtext">
                <p
                  style={{
                    fontSize: '13px',
                    color: '#fff',
                    lineHeight: '19.45px',
                    padding: '0 10px',
                    margin: '-4px 0 0 0',
                    textAlign: 'left',
                  }}
                >
                  TOTAL BILLED:
                </p>
                <p
                  style={{
                    margin: '0 0 7px 0',
                    padding: '0 10px',
                    lineHeight: '25.45px',
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#fff',
                  }}
                >
                  Ksh. 322,629.00
                </p>
                <div
                  style={{
                    width: '170%',
                    margin: '0',
                    display: 'block',
                    height: '2px',
                    background:
                      'linear-gradient(90deg, rgba(255,255,255,1)0 55%, rgba(0,0,0,0.3) 30% 100%)',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'center',
                    justifyContent: 'flex-start',
                    margin: '5px 0 -2px 0',
                    padding: '0 10px',
                  }}
                >
                  <p
                    style={{
                      fontSize: '13px',
                      color: '#fff',
                      lineHeight: '19.45px',
                      margin: '0 2px 0 0',
                      textAlign: 'left',
                    }}
                  >
                    View Details
                  </p>
                  <IoArrowForwardCircle size={16} color="#fff" />
                </div>
              </div>
            </div>
            <div className="card">
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  backgroundColor: 'rgb(0, 166, 90)',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <CiHeart size={46} color="#fff" />
              </div>
              <div className="cardtext">
                <p
                  style={{
                    fontSize: '13px',
                    color: '#fff',
                    lineHeight: '19.45px',
                    padding: '0 10px',
                    margin: '-4px 0 0 0',
                    textAlign: 'left',
                  }}
                >
                  TOTAL PAID:
                </p>
                <p
                  style={{
                    margin: '0 0 7px 0',
                    padding: '0 10px',
                    lineHeight: '25.45px',
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#fff',
                  }}
                >
                  Ksh. 322,629.00
                </p>
                <div
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(255,255,255,1) 0 30%, rgba(0,0,0,0.3) 30% 100%)',
                    width: '170%',
                    margin: '0',
                    height: '2px',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'center',
                    justifyContent: 'flex-start',
                    margin: '5px 0 -2px 0',
                    padding: '0 10px',
                  }}
                >
                  <p
                    style={{
                      fontSize: '13px',
                      color: '#fff',
                      lineHeight: '19.45px',
                      margin: '0 2px 0 0',
                      textAlign: 'left',
                    }}
                  >
                    View Details
                  </p>
                  <IoArrowForwardCircle size={16} color="#fff" />
                </div>
              </div>
            </div>
            <div className="card">
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  backgroundColor: 'rgb(0, 192, 239)',
                  display: 'grid',
                  placeItems: 'center',
                  opacity: '0.7',
                }}
              >
                <BsChat size={38} color="#fff" />
              </div>
              <div className="cardtext">
                <p
                  style={{
                    fontSize: '13px',
                    color: '#fff',
                    lineHeight: '19.45px',
                    padding: '0 10px',
                    margin: '-4px 0 0 0',
                    textAlign: 'left',
                  }}
                >
                  BALANCE:
                </p>
                <p
                  style={{
                    margin: '0 0 7px 0',
                    padding: '0 10px',
                    lineHeight: '25.45px',
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#fff',
                  }}
                >
                  Ksh. 0.00
                </p>
                <div
                  style={{
                    width: '243%',
                    background:
                      'linear-gradient(90deg, rgba(255,255,255,1) 0 38%, rgba(0,0,0,0.3) 38% 100%)',
                    margin: '0',
                    height: '2px',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'center',
                    justifyContent: 'flex-start',
                    margin: '5px 0 -2px 0',
                    padding: '0 10px',
                  }}
                >
                  <p
                    style={{
                      fontSize: '13px',
                      color: '#fff',
                      lineHeight: '19.45px',
                      margin: '0 2px 0 0',
                      textAlign: 'left',
                    }}
                  >
                    View Details
                  </p>
                  <IoArrowForwardCircle size={16} color="#fff" />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              padding: '0 10px',
              backgroundColor: 'rgb(255, 255, 255)',
              borderRadius: '3px',
              boxShadow: '0 0 2px 0 rgba(0,0,0,0.2)',
              marginBottom: '30px',
              borderTop: '2px solid rgb(210, 214, 222)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomColor: 'rgb(244, 244, 244)',
                borderBottomStyle: ' solid',
                borderBottomWidth: '1px',
              }}
            >
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: '18px',
                  fontWeight: '500',
                }}
              >
                User Profile
              </p>
              <div>
                <HiMinus size={20} color="#000" />
                <IoAdd
                  style={{
                    transform: 'rotate(45deg)',
                  }}
                  color="#000"
                  size={20}
                />
              </div>
            </div>
            <div>
              <img
                style={{
                  width: '200px',
                  height: '200px',
                  marginTop: '20px',
                }}
                src="https://studentportal.cuea.edu/images/student_m.png"
                alt="profile"
              />
            </div>
            <p
              style={{
                fontiSze: '21px',
                fontWeight: '500',
                color: ' rgb(51, 51, 51)',
              }}
            >
              NYANDUSI NYAKERAMBA
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <FaBook
                style={{
                  transform: 'skeyY(40deg)',
                  marginRight: '4px',
                }}
                size={12}
                color="#000"
              />
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  margin: '0',
                }}
              >
                Programme
              </p>
            </div>
            <p
              style={{
                fontSize: '14px',
                fontWeight: '400',
                color: 'rgb(119, 119, 119)',
                textAlign: 'left',
                lineHeight: '30.45px',
                margin: '0',
              }}
            >
              217 - Bachelor of Science in Nursing
            </p>
            <div
              style={{
                width: '90%',
                height: '1.5px',
                margin: '20px auto',
                backgroundColor: 'rgb(244, 244, 244)',
              }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '40px',
              }}
            >
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: 'rgb(68, 68, 68)',
                  margin: '0',
                }}
              >
                My Stage
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '2px',
                }}
              >
                <FaChevronDown size={12} color="rgb(221, 75, 57" />
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: '400',
                    color: 'rgb(221, 75, 57)',
                    margin: '0',
                  }}
                >
                  Y2S1
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              padding: '0 10px 20px 10px',
              boxShadow: '0 0 2px 0 rgba(0,0,0,0.2)',
              borderRadius: '3px',
              backgroundColor: 'rgb(255, 255, 255)',
              marginBottom: '30px',
              borderTop: '2px solid rgb(0, 192, 239)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomColor: 'rgb(244, 244, 244)',
                borderBottomStyle: ' solid',
                borderBottomWidth: '1px',
              }}
            >
              <p
                style={{
                  fontSize: '17.5px',
                  lineHeight: '18px',
                  fontWeight: '500',
                }}
              >
                Personal Information
              </p>
              <button
                type="button"
                style={{
                  backgroundColor: 'rgb(0, 166, 90)',
                  borderRadius: '3px',
                  width: '112px',
                  height: '28px',
                  display: 'flex',
                  flexDirection: 'row',
                  fontSize: '12px',
                  border: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                }}
              >
                <FiEdit size={16} color="#fff" />
                Update Profile
              </button>
            </div>
            <div
              style={{
                border: '1px solid rgb(244, 244, 244)',
                marginTop: '8px',
              }}
            >
              {data.map((item) => (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottom: '1px solid rgb(244, 244, 244)',
                  }}
                  key={item.id}
                >
                  <div
                    className="starshape"
                    style={{
                      width: '40%',
                      height: '37px',
                      alignItems: 'center',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '14px',
                        color: '#f88207',
                        contrast: '2',
                        margin: '0',
                        paddingLeft: '8px',
                      }}
                    >
                      {item.name}
                      :
                    </p>
                  </div>
                  <div
                    style={{
                      width: '60%',
                      height: '37px',
                      alignItems: 'center',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '14px',
                        color: '#333333',
                        margin: '0',
                        contrast: '12',
                      }}
                    >
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer
        style={{
          padding: '15px 20px',
          backgroundColor: 'white',
        }}
      >
        <p
          style={{
            margin: '0',
            fontSize: '13px',
            color: '#444444',
            fontWeight: '700',
            letterSpacing: '-0.2px',
          }}
        >
          All rights reserved &#169; 2024. Powered by
          {' '}
          <span style={{ color: '#f88207' }}>AppKings Solution Ltd</span>
          .
        </p>
      </footer>
    </div>
  );
};

export default Home;
