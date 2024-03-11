import Button from "@/components/ui/Button";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      page
      <Button size="lg" padding={0} colors="red">
        кнопка
      </Button>
    </div>
  );
};

export default page;
