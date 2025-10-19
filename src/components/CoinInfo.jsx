import { Flex, Typography } from "antd";

export default function CoinInfo({ coin, withSymbol }) {
    return (
        <Flex align="center">
            <img
                src={coin.icon}
                alt={coin.name}
                style={{ width: 40, marginRight: 10 }}
            />
            <Typography.Title lavel={2} style={{ margin: 0 }}>
                {/* {withSymbol && coin.symbol} {coin.name} */}
                {withSymbol && <span>({coin.symbol})</span>} {coin.name}
            </Typography.Title>
        </Flex>
    )
}