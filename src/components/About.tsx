'use client'

const About = () => {
  const credentials = [
    { title: "Black Belt in Brazilian Jiu Jitsu", subtitle: "Will-Machado BJJ Australasia" },
    { title: "Floro Fighting System Level 9", subtitle: "Instructor Certification" },
    { title: "Kinetic Fighting – IC Instructor", subtitle: "Echo Level" },
    { title: "3rd Dan Black Belt", subtitle: "Advanced Fighting Arts & Self Defence" },
  ]

  const timeline = [
    { year: "1974", event: "Craig is born via an epic hip escape" },
    { year: "1990", event: "Started Australian Freestyle Combat Karate with Sensei Robert Reid" },
    { year: "1993", event: "Earned Black Belt in Australian Freestyle Combat Karate" },
    { year: "1993", event: "Started training Brazilian Jiu Jitsu with John Will" },
    { year: "1994", event: "Earned 1st Dan Black Belt in Advanced Fighting Arts & Self Defence" },
    { year: "1996", event: "Earned 2nd Dan Black Belt in Advanced Fighting Arts & Self Defence" },
    { year: "1998", event: "Started private lessons from John Will in BJJ (20+ years)" },
    { year: "2000", event: "Earned 3rd Dan Black Belt in Advanced Fighting Arts & Self Defence" },
    { year: "2002", event: "Started instructing Brazilian Jiu Jitsu at Taipan Muay Thai" },
    { year: "2007", event: "Earned Purple Belt in Brazilian Jiu Jitsu" },
    { year: "2011", event: "&apos;Integrity BJJ&apos; is introduced as the group&apos;s name" },
    { year: "2014", event: "Integrity Martial Arts Academy opens" },
    { year: "2015", event: "Earned Floro Fighting System Level 1 Instructor" },
    { year: "2016", event: "Earned Brown Belt in Brazilian Jiu Jitsu" },
    { year: "2018", event: "Earned Black Belt in Brazilian Jiu Jitsu" },
    { year: "2019", event: "Qualified as KEF-Integrated Combat Instructor" },
    { year: "2019", event: "Earned Floro Fighting System Level 8 & 9 Instructor" },
    { year: "2022", event: "Upgraded KEF-Integrated Combat Instructor level to Delta & Echo" },
  ]

  return (
    <section id="about" style={{
      padding: '3rem 1rem',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #31bf31, #1d301d)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>About</h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#888888',
            maxWidth: '768px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Meet Craig Donaldson, the head instructor and owner of Integrity Martial Arts Academy, 
            with over 30 years of martial arts experience and world-class credentials.
          </p>
        </div>

            {/* Craig's Profile */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
              alignItems: 'center',
              marginBottom: '3rem'
            }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              width: '100%',
              height: '400px',
              background: '#e5e7eb',
              borderRadius: '1rem',
              overflow: 'hidden',
              backgroundImage: 'url("/images/craig-donaldson.png")',
              backgroundSize: 'contain',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '-1.5rem',
              right: '-1.5rem',
              width: '96px',
              height: '96px',
              background: 'linear-gradient(135deg, #31bf31, #1d301d)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem'
            }}>
              🏆
            </div>
          </div>

          <div style={{ padding: '0 1rem' }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#1d301d',
              marginBottom: '0.5rem'
            }}>Craig Donaldson</h3>
            <p style={{
              fontSize: '1.25rem',
              color: '#31bf31',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>Head Instructor & Owner</p>
            
            <p style={{
              color: '#888888',
              lineHeight: 1.6,
              marginBottom: '1.5rem'
            }}>
              Craig Donaldson is the owner and head coach of Integrity Martial Arts Academy. 
              With over 30 years of martial arts experience, he brings a wealth of knowledge 
              and expertise to every class.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <span style={{ fontSize: '1.5rem' }}>👥</span>
                <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>30+ Years Experience</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <span style={{ fontSize: '1.5rem' }}>🎯</span>
                <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Multiple Black Belts</span>
              </div>
            </div>
          </div>
        </div>

            {/* Credentials */}
            <div style={{ marginBottom: '3rem' }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #31bf31, #1d301d)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Credentials</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem'
          }}>
            {credentials.map((credential, index) => (
              <div key={index} style={{
                background: 'white',
          boxShadow: '0 4px 6px -1px rgba(49, 191, 49, 0.1)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: '#fef2f2',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto',
                  fontSize: '1.5rem'
                }}>
                  🏆
                </div>
                <h4 style={{
                  fontWeight: '600',
                  color: '#1d301d',
                  marginBottom: '0.5rem'
                }}>{credential.title}</h4>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#6b7280'
                }}>{credential.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - Commented Out */}
        {/* 
        <div>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #31bf31, #1d301d)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Craig&apos;s Journey</h3>
          <div style={{ 
            position: 'relative',
            overflowX: 'auto',
            padding: '2rem 0',
            scrollBehavior: 'smooth'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '0',
              right: '0',
              height: '4px',
              background: 'linear-gradient(135deg, #31bf31, #1d301d)',
              transform: 'translateY(-50%)',
              zIndex: 1
            }}></div>
            
            <div style={{ 
              display: 'flex',
              gap: '2rem',
              minWidth: 'max-content',
              padding: '0 1rem'
            }}>
              {timeline.map((item, index) => (
                <div key={index} style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minWidth: '200px',
                  maxWidth: '250px'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    background: 'linear-gradient(135deg, #31bf31, #1d301d)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    marginBottom: '1rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                  }}>
                    <span style={{ color: 'white', fontSize: '1rem' }}>📅</span>
                  </div>
                  
                  <div style={{
                    background: 'white',
                    boxShadow: '0 4px 6px -1px rgba(49, 191, 49, 0.1)',
                    padding: '1.5rem',
                    borderRadius: '0.75rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    textAlign: 'center',
                    width: '100%'
                  }}>
                    <div style={{
                      marginBottom: '0.75rem'
                    }}>
                      <span style={{
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        color: '#31bf31',
                        display: 'block'
                      }}>
                        {item.year}
                      </span>
                    </div>
                    <p style={{
                      color: '#1d301d',
                      fontWeight: '500',
                      fontSize: '0.875rem',
                      lineHeight: '1.4',
                      margin: 0
                    }}>
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  )
}

export default About