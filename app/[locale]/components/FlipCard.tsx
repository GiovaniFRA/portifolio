import { useState } from "react";

export default function Flipcard({ children, width, height, title, text }: { children: React.ReactNode, width: string, height?: string, title: string, text: string }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div 
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
            style={{ 
                perspective: '1000px', 
                width: width, 
                height: height || '300px'
            }}
        >   
            <div style={{
                ...styles.inner,
                transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}>
                
                <div style={styles.cardFront}>
                    {children}
                </div>

                <div style={styles.cardBack}>
                    <h3 style={{ fontWeight: "bold" }}>{title}</h3>
                    <p>{text}</p>
                </div>

            </div>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    inner: {
        position: 'relative',
        width: '100%',
        height: '100%',
        transition: 'transform 0.6s',
        transformStyle: 'preserve-3d',
    },
    cardCommon: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '15px',
        backgroundColor: 'white',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)',
        padding: '20px',
    },
    cardFront: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '15px',
        backgroundColor: 'white',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)',
        padding: '20px',
    },
    cardBack: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: '15px',
        backgroundColor: 'white',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)',
        padding: '20px',
        transform: 'rotateY(180deg)',
        gap: '4vh',
    }
}