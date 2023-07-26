import { Container, Flex, Box } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Footer as FooterWrapper } from "./style";
import { UserImage } from "@/pages/home/style";
import { userData } from "@/utils/userData";

export const Footer = (): JSX.Element => {
  return (
    <FooterWrapper id="blog">
      <Container>
        <Flex>
          <UserImage
            src={`https://github.com/${userData.githubUser}.png`}
            alt={userData.nameUser}
            title={userData.nameUser}
            width={"70px"}
            height={"70px"}
          />
          <Box css={{ marginLeft: "$2" }}>
            <Text type="heading4" color="grey5" css={{ marginBottom: "$2" }}>
              About me...
            </Text>
            <Text type="body1" color="grey2">
              My name is Julles, my pronouns are they/them, I am a trans non
              binary person in love with programming. I have an electromechanics
              tech degree, and it was at this course my journey began, learning
              programming logics addressed to electronics and robotics. Some
              years later I accepted the challange to become a Fullstack Web
              Developer and now here I am :D
            </Text>
            <Text type="body1" color="grey2">
              If you want to know more about me and my background, please {""}
              <Text
                as="a"
                color="grey2"
                href="#contact"
                style={{ color: "#2cff9d" }}
              >
                contact me.
              </Text>
            </Text>
          </Box>
        </Flex>
      </Container>
    </FooterWrapper>
  );
};
