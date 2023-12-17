import clsx from 'clsx';
import Image from 'next/image';

export default function Category() {
  return (
    <div>
      <section className={clsx(
        'mx-5 mt-14',
      )}
      >
        <div className={clsx(
          'category-items',
        )}
        >
          <div className={clsx(
            'container',
            'cursor-pointer',
          )}
          >
            <Image
              src="https://halalvar.github.io/halalvar/fruit-3d.jpg"
              width={100}
              height={100}
              alt="fruite"
              className={clsx(
                'image',
                'rounded',
              )}
            />
            <div className={clsx(
              'overlay',
            )}
            >
              <div className={clsx()}>
                Fruit
              </div>
            </div>
          </div>
          <div className={clsx(
            'container',
            'cursor-pointer',
          )}
          >
            <Image
              src="https://halalvar.github.io/halalvar/drink-3d.jpg"
              width={100}
              height={100}
              alt="drink"
              className={clsx(
                'image',
                'rounded',
              )}
            />
            <div className={clsx(
              'overlay',
            )}
            >
              <div>
                Drink
              </div>
            </div>
          </div>
          <div className={clsx(
            'container',
            'cursor-pointer',
          )}
          >
            <Image
              src="https://halalvar.github.io/halalvar/vegetable-3d.jpg"
              width={100}
              height={100}
              alt="vegetabls"
              className={clsx(
                'image',
                'rounded',
              )}
            />
            <div className={clsx(
              'overlay',
            )}
            >
              <div>
                Vegetabls
              </div>
            </div>
          </div>
          <div className={clsx(
            'container',
            'cursor-pointer',
          )}
          >
            <Image
              src="https://halalvar.github.io/halalvar/bread-3d.jpg"
              width={100}
              height={100}
              alt="bread"
              className={clsx(
                'image',
                'rounded',
              )}
            />
            <div className={clsx(
              'overlay',
            )}
            >
              <div>
                Bread
              </div>
            </div>
          </div>
          <div className={clsx(
            'container',
            'cursor-pointer',
          )}
          >
            <Image
              src="https://halalvar.github.io/halalvar/fresh-food-3d.jpg"
              width={100}
              height={100}
              alt="fresh food"
              className={clsx(
                'image',
                'rounded',
              )}
            />
            <div className={clsx(
              'overlay',
            )}
            >
              <div>
                FreshFood
              </div>
            </div>
          </div>
          <div className={clsx(
            'container',
            'cursor-pointer',
          )}
          >
            <Image
              src="https://halalvar.github.io/halalvar/ice-cream-3d.jpg"
              width={100}
              height={100}
              alt="ice cream"
              className={clsx(
                'image',
                'rounded',
              )}
            />
            <div className={clsx(
              'overlay',
            )}
            >
              <div>
                Ice-cream
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
