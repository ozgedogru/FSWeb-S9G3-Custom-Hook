import useLocalStorage from "./localStorageKullan";

function useGeceModu() {
  const [geceModu, setGeceModu] = useLocalStorage("geceModu", false);

  return [geceModu, setGeceModu];
}
export default useGeceModu;
