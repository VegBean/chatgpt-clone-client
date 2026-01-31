import AppInput from "@/components/app-input";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full -translate-y-28">
      <div className="text-center text-[28px] mb-3">有什么可以帮忙的?</div>
      <AppInput />
    </div>
  );
};
export default Home;
