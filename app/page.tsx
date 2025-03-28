import {
  Categories,
  Container,
  SortPopUp,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы мира" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
    </>
  );
}
