import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSpellDetailAPI } from '../../api';
import { TypeSpellDetail } from '../../types';
import { Loader } from '../../components/Loader';

const SpellDetails = () => {
  const { spell } = useParams();
  const [spellDetail, setSpellDetail] = useState<TypeSpellDetail | null>(null);

  const fetchSpellDetail = async (param: string) => {
    const data: TypeSpellDetail = await fetchSpellDetailAPI(param);
    setSpellDetail(data);
  };

  useEffect(() => {
    if (spell) {
      fetchSpellDetail(spell);
    }
  }, [spell]);
  return (
    <div className=" min-h-screen w-full grid place-items-center">
      {spellDetail?.index ? (
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-blue-400 font-semibold">
              {spellDetail?.school.name}
            </div>
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
              {spellDetail?.name}
            </h2>
            <p className="mt-2 text-gray-500">{spellDetail?.desc[0]}</p>
            <div className="mt-4">
              <p className="text-gray-500">
                Range:{' '}
                <span className=" font-bold text-blue-400">
                  {spellDetail?.range}
                </span>
              </p>
              <p className="text-gray-500">
                Components:{' '}
                <span className=" font-bold text-blue-400">
                  {spellDetail?.components.join(', ')}
                </span>
              </p>
              <p className="text-gray-500">
                Duration:{' '}
                <span className=" font-bold text-blue-400">
                  {spellDetail?.duration}
                </span>
              </p>
              <p className="text-gray-500">
                Casting Time:{' '}
                <span className=" font-bold text-blue-400">
                  {spellDetail?.casting_time}
                </span>
              </p>
              <p className="text-gray-500">
                Level:{' '}
                <span className=" font-bold text-blue-400">
                  {spellDetail?.level}
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SpellDetails;
