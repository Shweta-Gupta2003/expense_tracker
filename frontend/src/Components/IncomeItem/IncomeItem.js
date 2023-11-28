import React from 'react'
import { bitcoin, book, calender, card, circle, clothing, comment,food, freelance, medical, money, piggy, stocks, takeaway, tv, users, yt,ruppee, trend, des, trashing } from '../../utils/Icons';
import Button from '../Button/Button';
import styled from 'styled-components';


function IncomeItem({
    id,
    title,
    amount,
    date,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

  return (
        <IncomeItemStyled  indicator={indicatorColor}>
    
          <div className='content'>
            <h5>{title}</h5>

            <div className='inner-content'>
                <div className='text'>
                    <p>{ruppee}{amount}</p>
                    <p>{calender} {date}</p>
                    <p>{comment}
                    {description}
                  
                    </p>
                      
                </div>
            <div className='btn-con'>
                <Button 
                  name={'Delete'}
                  bpad={'.8rem 1.6rem'}
                  bRad={'30px'}
                  bg={'var(--color-accent'}
                  color={'#fff'}
                  hColor={'red'}
                  onClick={()=>deleteItem(id)}
                
                />
            </div>
            </div>
          </div>  
        </IncomeItemStyled>
  )
}

const IncomeItemStyled=styled.div`
     background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;
    .icon{
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i{
            font-size: 2.6rem;
        }
    }

    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }

        .inner-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                display: flex;
                align-items: center;
                gap: 1.5rem;
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.8;
            }
        }
      }

     }
`;
export default IncomeItem