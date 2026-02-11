export default function Card({children,width,height}: {children: React.ReactNode,width:string,height?:string}) {
    return(
        <div style={{...styles.card,width:width,height:height}}>
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
    }
}
