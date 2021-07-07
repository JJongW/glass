import React, {useState, forwardRef} from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Container = styled.View`
flex-direction: column;
width: 100%;
margin: 10px 0;
`;
const StyledTextInput = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.inputPlaceholder,
  }))`
    background-color: ${({ theme, editable }) =>
      editable ? theme.background : theme.inputDisabledBackground};
    color: ${({ theme, isFocused }) => (isFocused? theme.text2: theme.text1)};
    padding: 18px 25px;
    font-size: 16px;
    border: 0.5px solid
      ${({ theme, isFocused }) => (isFocused ? theme.text : theme.inputBorder)};
    border-radius: 30px;
  `;
  const Input = forwardRef(
    (
      {
        value,
        onChangeText,
        onSubmitEditing,
        onBlur,
        placeholder,
        isPassword,
        returnKeyType,
        maxLength,
      },
      ref
    ) => {
      const [isFocused, setIsFocused] = useState(false);
  
      return (
        <Container>
          <StyledTextInput
            ref={ref}
            isFocused={isFocused}
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
              onBlur();
            }}
            placeholder={placeholder}
            secureTextEntry={isPassword}
            returnKeyType={returnKeyType}
            maxLength={maxLength}
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="none" // iOS only
            underlineColorAndroid="transparent" // Android only
          />
        </Container>
      );
    }
  );
  Input.defaultProps = {
    onBlur: () => {},
  };
  
  Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    isPassword: PropTypes.bool,
    returnKeyType: PropTypes.oneOf(['done', 'next']),
    maxLength: PropTypes.number,
  };
  
  export default Input;