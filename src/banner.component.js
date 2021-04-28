import tenor from './tenor.gif';
export default function BannerComponent({ val }) {
    alert(val);
    return (
        <div>
            <h1>
                Moj Kradi Bete
            </h1>
            <img height="300px" src={tenor} alt="logo" />
        </div>
    )
}