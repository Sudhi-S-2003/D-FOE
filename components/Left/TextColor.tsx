

interface TextColorProps {
  color: string; 
}

const TextColor: React.FC<TextColorProps> = ({ color }) => {
  return (
    <div style={{ color }}>
      The text color is {color}.
    </div>
  );
};

export default TextColor;
