import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Registration1 = () => {

const { register, formState: { errors}, handleSubmit, watch } = useForm({ mode: "onBlur"});
const password = useRef({});
password.current = watch("password", "");

const onSubmit = (data) => {
  alert(JSON.stringify(data))
}

  return (
    <div className="page">
                    
          <div className="bread-crumbs" data-array="[{&amp;quot;title&amp;quot;:&amp;quot;\u0413\u043b\u0430\u0432\u043d\u0430\u044f&amp;quot;,&amp;quot;url&amp;quot;:&amp;quot;\/&amp;quot;},{&amp;quot;title&amp;quot;:&amp;quot;\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f&amp;quot;,&amp;quot;url&amp;quot;:&amp;quot;\/auth\/registration&amp;quot;}]">
          <div className="container">
                <span>
                  <a href="/">Главная</a>
                  <span className="bread-crumbs__separator">•</span>
              </span>
          </div>
    </div>

    <div className="page-title">
        <div className="container">
            <div className="page-title__title">Регистрация</div>
        </div>
    </div>

    <div className="section section--green section--registration registration">
        <div className="container">
           
               <div data-v-b77f7d0a="" className="registration"><div data-v-b77f7d0a="" className="stepper">
                <div data-v-b77f7d0a="" className="stepper-header"><div data-v-b77f7d0a="" className="stepper-point complete"></div> 
                <div data-v-b77f7d0a="" className="stepper-point"></div> <div data-v-b77f7d0a="" className="stepper-point"></div></div> 
                <div data-v-b77f7d0a="" className="stepper-body"><div data-v-b77f7d0a="" className="row between-xs">
                <div data-v-b77f7d0a="" className="col col-lg-5 col-md-6 col-xs-12 registration__form"><div data-v-b77f7d0a="">
                <div data-v-493f45f2="" data-v-b77f7d0a="" mode="eager">
                
                <form onSubmit={handleSubmit(onSubmit)} data-v-493f45f2="" className="support-form__form">

                <h3 data-v-493f45f2="">Шаг 1: Заполните Личные данные</h3> 

                <label data-v-493f45f2="" className="input__container field__container" label="Фамилия"><span className="field__label">Фамилия</span> 
                <div className="relative"> 

                <input 
                {...register('lastName', {
                  required: 'Поле обязательно к заполнению',
                  maxLength: {
                    value: 16,
                    message: 'Максимум 16 символов'
                  },

                })}
                placeholder="" 
                type="text" 
                className="field"
                /> 

                {/* Текст для вывода ошибки */}

                <div style={{height: 0, color: "red"}}>
                  {errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}
                </div>

                
                <div className="multiselect__spinner field__spinner" style={{display: "none"}}></div></div></label>
                <label data-v-493f45f2="" className="input__container field__container" label="Имя">
                <span className="field__label">Имя</span> 
                <div className="relative"> 
                <input 
                {...register('firstName', {
                  required: 'Поле обязательно к заполнению',
                  maxLength: {
                    value: 16,
                    message: 'Максимум 16 символов'
                  },

                })}
                placeholder="" 
                type="text" 
                className="field"
                /> 

                {/* Текст для вывода ошибки */}

                <div style={{height: 0, color: "red"}}>
                  {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
                </div> 


                <div className="multiselect__spinner field__spinner" style={{display: "none"}}></div></div></label> 
                <label data-v-493f45f2="" className="input__container field__container" label="Должность">
                <span className="field__label">Отчество</span>
                <div className="relative"> 
                <input 
                {...register('position', {
                  required: 'Поле обязательно к заполнению',
                  maxLength: {
                    value: 16,
                    message: 'Максимум 16 символов',
                  },                 

                })}
                placeholder="" 
                type="text" 
                className="field"
                /> 

                {/* Текст для вывода ошибки */}

                <div style={{height: 0, color: "red"}}>
                  {errors?.email && <p>{errors?.email?.message || "Error!"}</p>} 

                  
                </div> 


                <div className="multiselect__spinner field__spinner" style={{display: "none"}}></div></div></label> 
                <label data-v-493f45f2="" className="input__container field__container" label="Email">
                <span className="field__label">Email</span> 
                <div className="relative"> 
                <input 
                {...register('Email', {
                  required: 'Поле обязательно к заполнению',
                  maxLength: {
                    value: 16,
                    message: 'Максимум 16 символов'
                  },
                  pattern: {
                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Введите корректный Email'
                  }

                })}
                placeholder="" 
                type="text" 
                className="field"
                /> 

                {/* Текст для вывода ошибки */}

                <div style={{height: 0, color: "red"}}>
                  {errors?.Email && <p>{errors?.Email?.message || "Error!"}</p>}
                </div> 

                
                <div className="multiselect__spinner field__spinner" style={{display: "none"}}></div>  </div>  </label> 
                <label data-v-493f45f2="" className="input__container field__container" label="Номер">
                <span className="field__label">Номер</span> 
                <div className="relative"> 
                <input 
                {...register('Number', {
                  required: 'Поле обязательно к заполнению',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Введите корректный номер',
                  },
                  minLength: {
                    value: 10,
                    message: 'Номер слишком короткий'
                  },
                  maxLength: {
                    value: 16,
                    message: 'Максимум 16 символов',
                  },

                })}
                placeholder="" 
                type="text" 
                className="field"
                /> 

                {/* Текст для вывода ошибки */}

                <div style={{height: 0, color: "red"}}>
                  {errors?.Number && <p>{errors?.Number?.message || "Error!"}</p>}
                </div> 


                <div className="multiselect__spinner field__spinner" style={{display: "none"}}></div>  </div>  </label> 
                <label data-v-493f45f2="" className="input__container field__container" label="Пароль">
                <span className="field__label">Пароль</span> 
                <div className="relative"> 
                <input 
                {...register('password', {
                  required: 'Поле обязательно к заполнению',
                  maxLength: {
                    value: 16,
                    message: 'Максимум 16 символов'
                  },
                  minLength: {
                    value: 6,
                    message: 'Пароль слишком короткий'
                  }

                })}
                placeholder="" 
                type="password" 
                className="field"
                /> 

                {/* Текст для вывода ошибки */}

                <div style={{height: 0, color: "red"}}>
                  {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
                </div>


                <div className="multiselect__spinner field__spinner" style={{display: "none"}}></div>  </div>  </label> 
                <label data-v-493f45f2="" className="input__container field__container" label="Повторите пароль">
                <span className="field__label">Повторите пароль</span></label>
                <input 
                {...register('password_repeat', {
                  required: 'Поле обязательно к заполнению',
                  maxLength: {
                    value: 16,
                    message: 'Максимум 16 символов'
                  },
                  minLength: {
                    value: 8,
                    message: 'Пароль слишком короткий'
                  },
                  validate: value =>
                  value === password.current || "Пароли не совпадают"

                })}
                placeholder="" 
                type="password" 
                className="field"
                /> 

                {/* Текст для вывода ошибки */}

                <div style={{height: 0, color: "red", marginBottom: 60}}>
                  {errors?.password_repeat && <p>{errors?.password_repeat?.message || "Error!"}</p>}
                </div>


                <div data-v-493f45f2="" className="field__container"><button type="submit" data-v-493f45f2="" className="btn">Сохранить и продолжить</button></div>
    </form>
  
  </div>
</div>  
</div> 

      <div data-v-b77f7d0a="" className="col col-lg-5 col-md-6 col-xs-12 registration__info">
          <div data-v-b77f7d0a="" className="registration__tab">
            <div data-v-66209bb9="" data-v-b77f7d0a="" className="demands">
              <div data-v-66209bb9="" className="demands__text">Если у Вас уже есть учетная запись - 
                <a data-v-66209bb9="" href="#singin" className="demands__link popup-link"> Войдите в личный кабинет</a>
              </div>
      
      <div data-v-724bbd2f="" data-v-66209bb9="" className="spoiler">
        <div data-v-724bbd2f="" className="spoiler__header">
          
        </div> 
      </div> 
                
        <div data-v-724bbd2f="" data-v-66209bb9="" className="spoiler">
            <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Требования к програмному обеспечению</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Для корректной работы на электронной торговой площадке .....
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Примеры документов и шаблоны</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div><a href="#">Анкета компании</a> (32КБ)</div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        </div>

      </div>
               
      <div data-v-b77f7d0a="" className="registration__tab"><div data-v-20a93402="" data-v-b77f7d0a="" className="gis">
        <div data-v-20a93402="" className="gis__item"><img data-v-20a93402="" src="/content/gis.png" alt="" />
        </div> 
        <div data-v-20a93402="" className="gis__item">
          <div data-v-20a93402="" className="gis__title">Плагин ГИС "Независимый регистратор" на защите интересов участников контрактной системы
          </div> <div data-v-20a93402="" className="gis__body">
                Плагин необходим для защиты прав и законных интересов поставщиков и
                заказчиков в ФАС России, в том числе при обжаловании. Позволяет
                записывать в режиме реального времени все действия, совершаемые на
                электронной площадке
          </div> 
          <div data-v-20a93402="" className="gis__link"><a data-v-20a93402="" href="https://zakupki.gov.ru/epz/main/public/download/downloadDocument.html?id=33257">
        СКАЧАТЬ ПЛАГИН ГИС НР
        <svg data-v-20a93402="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect data-v-20a93402="" x="7.11133" width="1.77778" height="12" fill="#014DA8"></rect> <rect data-v-20a93402="" y="14" width="16" height="2" fill="#014DA8"></rect> <path data-v-20a93402="" d="M1.33398 5.5L8.00065 13L14.6673 5.5" stroke="#014DA8" stroke-width="2"></path></svg></a></div></div></div></div></div></div></div></div></div>
        </div>
         </div>
            </div>

  );
};

export default Registration1;
