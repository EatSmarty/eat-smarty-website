import BarcodeScanner from "@/components/scan/barcodeScanner";
import Header from "@/components/header/header";

export default function Page() {
  return (
    <>
      <Header title={"Scan"}></Header>
      <BarcodeScanner />
    </>
  );
}