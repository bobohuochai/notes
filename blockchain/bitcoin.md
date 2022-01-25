## 比特币：一种点对点的电子现金系统

使用点对点网络去解决双重支出问题。点对点网络将为每笔交易标记时间戳，方法是：把交易的散列数据录入一个不断延展的、以散列为基础的工作证明链上，形成一个如非完全重做就不可能改变的记录。


### 双重支付(double-spending)

双重支付（一币多付、双花攻击）是同一笔数字货币可以被重复花用两次或更多次的情形，是一种数字货币失败模式的构想。任何数字货币都有防止双重支付的措施。

* 受信任的第三方（中心化）
通常由在线受信任的第三方来验证一个数字token是否被花用过。


* 去中心化
在2007年，数个分布式的双重支付防范方法被提出，运用于加密货币与其底层的区块链技术。

### 区块链

We define an electronic coin as a chain of digital signatures.Each owner transfers the coin to the next by digitally signing a hash of the previous transaction and the public key of the next owner and adding these on the end of the coin.

![chain](./chain.png)


### 工作证明(Proof-Of-Work)

To implement a distributed timestamp server on a peer-to-peer basis,we will need to use a proof-of-work system similar to Adam Back's Hashcash,rather than newspaper or Usenet posts.The proof-of-work involvues scanning for a value that when hashed,such as with SHA-256,the hash begins with a number of zero bits.The average work required is exponential in the number of zero bits required and can be verified by executing a single hash.


![Hashcash](./Hashcash.png)



### 权益证明(Proof of Stake)

以共识算法的方式，使用伪随机数的方式指定持有货币的人为交易的验证者，并创造新的区块并接续在最长的链后面。

权益证明共识机制，就是为了解决POW（Proof of work） 局限性所衍生的另一种共识机制，
POS与POW的差别在于，POS 用加密货币抵押量取代旷工算力的比拼，节点不需要花大笔钱买矿机或缴交巨额电费，相反的，他们必须花钱买加密货币，并将这些加密货币抵押在智能合约中。POS 共识机制下，大部分都是根据【币龄】以伪随机的方式，选择下一个区块的验证节点，简单来说就是，【抵押越多加币货币，抵押时间越长且距离上次获得记账权越久的节点，获得下一次记账权的几率越高】。人性本贪，节点抵押的加密货币都是成本，作恶有可能导致币价下跌，且抵押的代币会被没收，对节点而言就像是拿石头砸自己的脚，理性的节点为了最大化利益，理论上不会选择作恶。


#### 优点
* POS 机制不再需要浪费电力争记账权，有效解决能源问题
* 验证效率提高
* 降低区块链临时分叉的几率

#### 缺点

* 无利害关系
* 过于资本主义（富者恒富）



### 参考

* > https://github.com/xiaolai/bitcoin-whitepaper-chinese-translation
* > https://zh.wikipedia.org/wiki/%E9%9B%99%E9%87%8D%E6%94%AF%E4%BB%98
* > https://github.com/nosequeldeebee/blockchain-tutorial
* > https://zh.wikipedia.org/wiki/%E6%8C%81%E6%9C%89%E9%87%8F%E8%AD%89%E6%98%8E
* > https://know.zombit.info/pos/