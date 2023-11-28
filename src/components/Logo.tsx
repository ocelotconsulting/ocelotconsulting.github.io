
const getOrigin = () => {
    if (typeof window !== 'undefined') {
        return window.location.origin
    } else if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:3000'
    } else {
        return 'https://www.ocelotconsulting.com'
    }
}
export default function Logo() {
    return (
      <img src={`${getOrigin()}/assets/logo.svg`} alt='Ocelot Logo' />
    )
}
