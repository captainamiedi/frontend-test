import React, { useState, useEffect, useRef } from 'react';
import VacancyCard from './VacancyCard';
import { CircularProgress, List } from '@mui/material';
import { useIntersectionObserver } from '../../hooks/useInfiniteScroll';
import { Vacancy } from '../../types/vacancyTypes';

const VacancyList: React.FC = () => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const lastItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchVacancies(page);
  }, [page]);

  const fetchVacancies = async (page: number) => {
    setLoading(true);
    setTimeout(() => {
      const newVacancies = Array.from({ length: 10 }, (_, i) => ({
        id: i + (page - 1) * 10,
        title: `Вакансия №${i + 1}`,
        salary: '130000 - 220000 руб. на руки',
        location: 'Кимры',
        company: 'ООО ОПТИМУС',
        experience: 'Опыт 3 - 6 лет',
      }));
      setVacancies((prevVacancies) => [...prevVacancies, ...newVacancies]);
      setLoading(false);
    }, 1000);
  };

  useIntersectionObserver(lastItemRef, () => setPage((prevPage) => prevPage + 1), loading);

  return (
    <div>
      <List>
        {vacancies.map((vacancy, index) => (
          <div key={vacancy.id}>
            <VacancyCard {...vacancy} />
            {index === vacancies.length - 1 && <div ref={lastItemRef} />}
          </div>
        ))}
      </List>

      {loading && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default VacancyList;
