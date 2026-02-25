export default function Card({children,className,onClick}: {children: React.ReactNode, className?: string, onClick?: () => void}) {
    return(
        <div className={className} style={{...styles.card}} onClick={onClick}>
            {children}
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    card:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'15px',
        backgroundColor:'white',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)',
        padding:'20px',
        cursor:'pointer',
    }
}
