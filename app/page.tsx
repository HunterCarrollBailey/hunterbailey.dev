import Heading from "@/app/components/typography/Headings";
import Paragraph from "@/app/components/typography/Paragraphs";
import { ListDecimal, ListDecimalHorizontal } from "./components/lists/OrderedLists";
import { ListDisc, ListDiscHorizontal, ListNone, ListNoneHorizontal } from "./components/lists/UnorderedLists";
import Card from "@/app/components/cards/Card";
import Button from "@/app/components/buttons/Button";

export default function Home() {
  return (
    <Card className="w-11/12 mx-auto overflow-scroll">
      <Heading Level={1}>Heading 1</Heading>
      <Heading Level={2}>Heading 2</Heading>
      <Heading Level={3}>Heading 3</Heading>
      <Heading Level={4}>Heading 4</Heading>
      <Heading Level={5}>Heading 5</Heading>
      <Heading Level={6}>Heading 6</Heading>
      <Paragraph>Paragraph</Paragraph>
      <Card className="rounded-md my-2">
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima exercitationem quam voluptatum labore placeat nemo aut porro id dignissimos odio dolorem recusandae fugit nulla iste tempora, rerum quos laboriosam aliquam est. Sint ipsam ipsa voluptates voluptatem distinctio consectetur minima nesciunt provident ducimus doloribus dolorem labore sit odit expedita dicta tenetur soluta doloremque dolores fugit magni officia, nostrum repudiandae laboriosam! Natus assumenda sunt deserunt nesciunt, amet labore nihil beatae enim corporis veritatis nulla accusantium eius suscipit quibusdam.
        <br />
        <Button>Button</Button>
      </Paragraph>
      </Card>
      <ListDecimal>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ListDecimal>
      <ListDecimalHorizontal>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ListDecimalHorizontal>
      <Card className="rounded-md my-2">
        <ListDisc>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ListDisc>
        <ListDiscHorizontal>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ListDiscHorizontal>
      </Card>
      <ListNone>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ListNone>
      <ListNoneHorizontal>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ListNoneHorizontal>
    </Card>
  );
}
