import { ethers } from 'ethers';
import { isAddress } from 'ethers/lib/utils';
import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { ensToAddress, isBlockchainAddress, truncateAddress } from '../utils/stringUtils';
import { CloseIcon } from './Icons';

const Container = styled.div`
  font-family: 'Arial';
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  border-radius: 5px;
  background-color: white;
  margin-top: 2px;
  ${(props) => (props.isError ? 'border-color:red' : '')};
`;

const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 0;
  align-items: center;
  min-width: 0;
`;

const Item = styled.div`
    display: grid;
    margin: 2px 2px;
    padding: 2px;
    background: #6864dd;
    border-radius: 4px ;
    padding-right: 6px;
    padding-left: 6px;
`;

const TextInput = styled.input`
  flex: 1 0;
  min-width: 50px;
  min-height: 25px;
  font-size: inherit;
  background-color: transparent;
  padding-left: 5px;
  border:0;
  &:focus {
    outline: none;
  }
`;

const Icon = styled.div`
  flex: 0 0;
  cursor: pointer;
  margin-right:5px;
  display: ${(props) => props?.display};
`;

export const MultiValueAddressInput = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [values, setValues] = useState([]);

    const isError = useMemo(() => {
        return values.length > new Set(values).size;
    }, [values]);

    const handleKeyDown = useCallback(
        async (event) => {
            if (event.key === 'Enter' || event.keyCode === 13) {
                const value = inputValue.trim();
                if (value.length > 0) {
                    if (isBlockchainAddress(value) === true) {
                        if (isAddress(value) === true) {
                            let tp = new ethers.providers.AlchemyProvider("mainnet", "A4OQ6AV7W-rqrkY9mli5-MCt-OwnIRkf");
                            let ensReq = await tp.lookupAddress(value);
                            if (Boolean(ensReq) === true) {
                                let newValues = Array.from(new Set([...values, {
                                    raw: value,
                                    pretty: ensReq
                                }]))
                                setValues(newValues);
                            }
                            else {
                                let newValues = Array.from(new Set([...values, {
                                    raw: value,
                                    pretty: truncateAddress(value, 3)
                                }]))
                                setValues(newValues);
                            }
                        }
                        else {
                            let newValues = Array.from(new Set([...values, {
                                raw: value,
                                pretty: truncateAddress(value, 3)
                            }]))
                            setValues(newValues);
                        }

                    }
                    else if (value.slice(value.length - 4, value.length) === '.eth') { // .eth
                        let resolvedAddress = await ensToAddress(value);
                        if (Boolean(resolvedAddress) === true) {
                            setValues([...values, {
                                raw: resolvedAddress,
                                pretty: value
                            }]);
                        }
                    }
                }
                setInputValue('');
            } else if (event.key === 'Backspace' || event.keyCode === 8) {
                if (inputValue.length === 0 && values.length > 0) {
                    setValues(values.slice(0, -1));
                }
            }
        },
        [inputValue, values]
    );

    return (
        <Container isError={isError}>
            <InputContainer>
                {values.map((value, index) => (
                    <Item key={`${value.raw}-${index}`}>{value.pretty}</Item>
                ))}
                <TextInput
                    value={inputValue}
                    onKeyDown={handleKeyDown}
                    onChange={(event) => {
                        setInputValue(event.target.value);
                    }}
                />
            </InputContainer>
            <Icon
                display={values.length === 0 ? 'none' : 'inline-block'}
                onClick={() => {
                    console.log('cleared');
                    setInputValue('');
                    setValues([]);
                }}
            >
                <CloseIcon />
            </Icon>
        </Container>
    );
};

export const MultiValueInput = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [values, setValues] = useState([]);

    const isError = useMemo(() => {
        return values.length > new Set(values).size;
    }, [values]);

    const handleKeyDown = useCallback(
        async (event) => {
            if (event.key === 'Enter' || event.keyCode === 13) {
                const value = inputValue.trim();
                if (value.length > 0) {
                    setValues([...values, value]);
                }
                setInputValue('');
            } else if (event.key === 'Backspace' || event.keyCode === 8) {
                if (inputValue.length === 0 && values.length > 0) {
                    setValues(values.slice(0, -1));
                }
            }
        },
        [inputValue, values]
    );

    return (
        <Container isError={isError}>
            <InputContainer>
                {values.map((value, index) => (
                    <Item key={`${value}-${index}`}>{value}</Item>
                ))}
                <TextInput
                    value={inputValue}
                    onKeyDown={handleKeyDown}
                    onChange={(event) => {
                        setInputValue(event.target.value);
                    }}
                />
            </InputContainer>
            <Icon
                display={values.length === 0 ? 'none' : 'inline-block'}
                onClick={() => {
                    console.log('cleared');
                    setInputValue('');
                    setValues([]);
                }}
            >
                <CloseIcon />
            </Icon>
        </Container>
    );
};
