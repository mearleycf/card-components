import styled from "styled-components";
import ActionButton, { BorderStyle } from "./Button";

interface CardProps {
  imageUrl: string;
  title: string;
  content: string;
  actionText: string;
  onActionClick: () => void;
}

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.primaryMain};
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.spacing?.sm || "8px"};
  margin: ${({ theme }) => theme.spacing?.sm || "8px"};
  border: ${({ theme }) => theme.spacing?.xxs} solid
    ${({ theme }) => theme.colors.primaryDark};
`;

const CardHeader = styled.div`
  height: ${({ theme }) => theme.spacing?.["2xl"] || "64px"};
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing?.m || "16px"};
`;

const CardAvatar = styled.img`
  border-radius: 50%;
  width: ${({ theme }) => theme.spacing?.xl || "48px"};
  height: ${({ theme }) => theme.spacing?.xl || "48px"};
  object-fit: cover;
  margin: ${({ theme }) => theme.spacing?.sm || "8px"};
`;

const CardTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primaryLight};
`;

const CardContent = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  background-color: ${({ theme }) => theme.colors.primaryContrast};
  padding: ${({ theme }) => theme.spacing?.m};
  border-radius: ${({ theme }) => theme.spacing?.sm};
`;

const Card: React.FC<CardProps> = (props) => {
  return (
    <CardContainer data-testid="card-component">
      <CardHeader>
        <CardAvatar src={props.imageUrl} alt={props.title} />
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>{props.content}</CardContent>
      <ActionButton
        onClick={props.onActionClick}
        actionText={props.actionText}
        borderColor="transparent"
        borderSize="0"
        borderStyle={BorderStyle.None}
        actionIconLeft="FaCircleInfo"
        actionIconRight="FaArrowUpRightFromSquare"
      ></ActionButton>
    </CardContainer>
  );
};

export default Card;
