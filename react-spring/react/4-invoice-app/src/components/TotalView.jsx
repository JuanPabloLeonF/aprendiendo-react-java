/* eslint-disable react/prop-types */
export const TotalView = ({total}) => {

    let totalProduct = total
    .map( item => {
        return item.price * item.quantify;
    })
    .reduce( (accumulator, currentValue) => accumulator + currentValue, 0);

    return (
    <>
        <div className="text-end">
            <span className="badge bg-success">
                {totalProduct}
            </span>
        </div>
    </>
    );
}