const user = {

    userName: "juan",
    email: "juan@gmail.com",
    age: 22,
    ranking: 9,
};

const detail = ({userName, ranking}) => {
    console.log(`etalles del usuario: ${userName} y su ranking es de ${ranking}`)
};

detail(user);