// just using children props

// const Card = ( { children }) => {
//   return (
//     <div className="card">
//      { children }
//     </div>
//   );

// };

const Card = ({ title, children }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Card;
