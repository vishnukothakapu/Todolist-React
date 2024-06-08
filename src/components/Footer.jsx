

const Footer = ({ completedTodos,totalTodos}) => {
    return (
      <>
        <div className="fixed bottom-0 w-full flex flex-row text-white bg-[#2c3e50] p-3 gap-8 justify-around font-mono items-center text-md md:text-2xl">
          <span className="">
            Completed Todos: {completedTodos}
          </span>
          <span className="">Total Todos: {totalTodos}</span>
        </div>
      </>
    );
}

export default Footer