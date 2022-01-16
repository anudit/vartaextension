import { ethers } from 'ethers';
import { isAddress } from 'ethers/lib/utils';
import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { ensToAddress, isBlockchainAddress, truncateAddress } from '../utils/stringUtils';
import { CloseIcon } from './Icons';

const Container = styled.div({
    fontFamily: 'Arial',
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "100px",
    backgroundColor: (props) => props.theme.colors.primary,
    boxShadow: "inset 2px -10px 13px rgb(0 0 0 / 15%), inset 0px 12px 45px rgb(0 0 0 / 21%)",
    borderColor: (props) => props.isError ? 'red' : '',
});

const InputContainer = styled.div({
    display: "flex",
    flexWrap: "wrap",
    flex: "1 0",
    alignItems: "center",
    minWidth: "0",
    minHeight: "40px",
});

const Item = styled.div({
    display: "grid",
    margin: "2px 2px",
    padding: "2px",
    background: (props) => props.theme.colors.accent,
    borderRadius: "4px",
    paddingRight: "6px",
    paddingLeft: "6px",
});

const TextInput = styled.input({
    // flex: "1 0",
    // minWidth: "50px",
    // minHeight: "25px",
    // fontSize: "inherit",
    backgroundColor: "transparent",
    // paddingLeft: "5px",
    // border: 0,
    // "&:focus": {
    //     outline: "none",
    // }
    color: (props) => props.theme.colors.text,
    // backgroundColor: (props) => props.theme.colors.primary,
    // boxShadow: "inset 2px -10px 13px rgb(0 0 0 / 15%), inset 0px 12px 45px rgb(0 0 0 / 21%)",
    width: "100%",
    borderRadius: "100px",
    border: "none",
    paddingLeft: "10px",
    paddingRight: "10px",
    "&:active": {
        border: "none",
    }
});

const Icon = styled.div({
    flex: "0 0",
    cursor: "pointer",
    marginRight: "5px",
    display: (props) => props?.display,
});

export const MultiValueAddressInput = (props) => {
    const [inputValue, setInputValue] = useState('');
    const { values, setValues } = props;

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
                            let tp = new ethers.providers.AlchemyProvider("homestead", "aCCNMibQ1zmvthnsyWUWFkm_UAvGtZdv");
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
                    else if (value.endsWith('.eth') === true) {
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
                    placeholder={props?.placeholder}
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
    const { values, setValues } = props;

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
                    placeholder={props?.placeholder}
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
