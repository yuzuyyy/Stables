import { bitcoin, buy, down, eth, near, sol, sui, swap, up, xrp } from "../assets";

const iconBoxes = [
  {
    icon: up,
    fill: "red",
    text: "send",
  },
  {
    icon: down,
    fill: "blue",
    text: "receive",
  },
  {
    icon: swap,
    fill: "yellow",
    text: "swap",
  },
  {
    icon: buy,
    fill: "green",
    text: "buy",
  },
];

const details = [
  {
    detail: "status",
    info: "sent"
  },
  {
    detail: "Address",
    info: "8H2u...XJc9"
  },
  {
    detail: "Amount",
    info: "47 USDC"
  },
  {
    detail: "Timestamp",
    info: "3 hours ago"
  },
]

const brandStats = [
  {
    image: bitcoin,
    name: 'bitcoin',
    currency: "BTC",
    growth: "+10.5%"
  },
  {
    image: eth,
    name: 'Ethereum',
    currency: "ETH",
    growth: "-0.5%",
    textColor: "red"
  },
  {
    image: sol,
    name: 'Solana',
    currency: "SOL",
    growth: "+9.8%"
  },
  {
    image: xrp,
    name: 'Xrp',
    currency: "XRP",
    growth: "-1.4%",
    textColor: "red"
  },
  {
    image: sui,
    name: 'SUI',
    currency: "SUI",
    growth: "+4.8%",
    
  },
  {
    image: near,
    name: 'NEAR',
    currency: "NEAr",
    growth: "+8%",
    // textColor: "red"
  },
]

export {
    iconBoxes,
    details,
    brandStats
}
