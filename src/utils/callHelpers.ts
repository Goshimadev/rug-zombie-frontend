import { ethers } from 'ethers'
import { BIG_ZERO } from './bigNumber'

export const approve = async (tokenContract, spenderAddress, account) => {
  return tokenContract.methods
    .approve(spenderAddress, ethers.constants.MaxUint256)
    .send({ from: account })
}

export const stake = async (drFrankensteinContract, pid, amount, account) => {
  if (pid === 0) {
    return drFrankensteinContract.methods
      .enterStaking(amount)
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }

  return drFrankensteinContract.methods
    .deposit(pid, amount)
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const unstake = async (drFrankensteinContract, pid, amount, account) => {
  if (pid === 0) {
    return drFrankensteinContract.methods
      .leaveStaking(amount)
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }

  return drFrankensteinContract.methods
    .withdraw(pid, amount)
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const unstakeEarly = async (drFrankensteinContract, pid, amount, account) => {
  if (pid === 0) {
    return drFrankensteinContract.methods
      .leaveStakingEarly(amount)
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }

  return drFrankensteinContract.methods
    .withdrawEarly(pid, amount)
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const unlock = async (drFrankensteinContract, pid, amount, account) => {
  return drFrankensteinContract.methods
    .unlock(pid)
    .send({ from: account, value: amount })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const spStake = async (spawningPoolContract, amount, account) => {
  return spawningPoolContract.methods
    .deposit(amount)
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const spUnstake = async (spawningPoolContract, amount, account) => {
  return spawningPoolContract.methods
    .withdraw(amount)
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const spUnstakeEarly = async (spawningPoolContract, amount, account) => {
  return spawningPoolContract.methods
    .leaveStakingEarly(amount)
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const spUnlock = async (spawningPoolContract, amount, account) => {
  return spawningPoolContract.methods
    .unlock()
    .send({ from: account, value: amount })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const depositRug = async (drFrankensteinContract, pid, amount, account) => {
  return drFrankensteinContract.methods
    .depositRug(pid, amount)
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const startMinting = async (tombOverlayContract, pid, fee, account) => {
  return tombOverlayContract.methods
    .startMinting(pid)
    .send({ from: account, value: fee })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const finishMinting = async (tombOverlayContract, pid, account) => {
  return tombOverlayContract.methods
    .finishMinting(pid)
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const harvest = async (masterChefContract, pid, account) => {
  if (pid === 0) {
    return masterChefContract.methods
      .leaveStaking('0')
      .send({ from: account, gas: 200000 })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }

  return masterChefContract.methods
    .deposit(pid, '0')
    .send({ from: account, gas: 200000 })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const soushHarvest = async (sousChefContract, account) => {
  return sousChefContract.methods
    .deposit('0')
    .send({ from: account, gas: 200000 })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const soushHarvestBnb = async (sousChefContract, account) => {
  return sousChefContract.methods
    .deposit()
    .send({ from: account, gas: 200000, value: BIG_ZERO })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}
