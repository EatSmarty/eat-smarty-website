import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

interface categoryProps {

}

const Category: FC<categoryProps> = ({ }) => {
  return <div>
    <section className={clsx(
      "category",
      "mt-14 mx-5"
    )}>
      <div className={clsx(
        "category-items"
      )}>
        <div className={clsx(
          "container",
          "cursor-pointer"
        )}>
          <Image src="https://halalvar.github.io/halalvar/fruit-3d.jpg"
            width={100}
            height={100}
            alt="fruite"
            className={clsx(
              "image",
              "rounded"
            )}
          />
          <div className={clsx(
            "overlay"
          )}>
            <div className={clsx(
              "text"
            )}>Fruit</div>
          </div>
        </div>
        <div className={clsx(
          "container",
          "cursor-pointer"
        )}>
          <Image src="https://halalvar.github.io/halalvar/drink-3d.jpg"
            width={100}
            height={100}
            alt="drink"
            className={clsx(
              "image",
              "rounded"
            )}
          />
          <div className={clsx(
            "overlay"
          )}>
            <div className={clsx(
              "text"
            )}>Drink</div>
          </div>
        </div>
        <div className={clsx(
          "container",
          "cursor-pointer"
        )}>
          <Image src="https://halalvar.github.io/halalvar/vegetable-3d.jpg"
            width={100}
            height={100}
            alt="vegetabls"
            className={clsx(
              "image",
              "rounded"
            )}
          />
          <div className={clsx(
            "overlay"
          )}>
            <div className={clsx(
              "text"
            )}>Vegetabls</div>
          </div>
        </div>
        <div className={clsx(
          "container",
          "cursor-pointer"
        )}>
          <Image src="https://halalvar.github.io/halalvar/bread-3d.jpg"
            width={100}
            height={100}
            alt="bread"
            className={clsx(
              "image",
              "rounded"
            )}
          />
          <div className={clsx(
            "overlay"
          )}>
            <div className={clsx(
              "text"
            )}>Bread</div>
          </div>
        </div>
        <div className={clsx(
          "container",
          "cursor-pointer"
        )}>
          <Image src="https://halalvar.github.io/halalvar/fresh-food-3d.jpg"
            width={100}
            height={100}
            alt="fresh food"
            className={clsx(
              "image",
              "rounded"
            )}
          />
          <div className={clsx(
            "overlay"
          )}>
            <div className={clsx(
              "text"
            )}>FreshFood</div>
          </div>
        </div>
        <div className={clsx(
          "container",
          "cursor-pointer"
        )}>
          <Image src="https://halalvar.github.io/halalvar/ice-cream-3d.jpg"
            width={100}
            height={100}
            alt="ice cream"
            className={clsx(
              "image",
              "rounded"
            )}
          />
          <div className={clsx(
            "overlay"
          )}>
            <div className={clsx(
              "text"
            )}>Ice-cream</div>
          </div>
        </div>
      </div>
    </section>
  </div>
}

export default Category