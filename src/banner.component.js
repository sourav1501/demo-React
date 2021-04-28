import tenor from './tenor.gif';
export default function BannerComponent({text}) {
    return (
        <div>
            <h1>
                Moj Kradi Bete {text}
            </h1>
            <img height="300px" src={tenor} alt="logo" />
        </div>
    )
}