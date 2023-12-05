export const UserDetails = ({user, id}) => {
    return(
        <>
        <div>
            <h1>Detalles del usuario:</h1>
            <h4>Nombre:</h4>
            <span>{user.name}</span>
            <h4>Apellido:</h4>
            <span>{user.lastName}</span>
            <h4>Id:</h4>
            <span>{id}</span>
        </div>
        </>
    );
}