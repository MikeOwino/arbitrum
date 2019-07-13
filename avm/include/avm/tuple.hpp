//
//  tuple.hpp
//  AVMtest
//
//  Created by Harry Kalodner on 6/19/19.
//

#ifndef tuple_hpp
#define tuple_hpp

#include "codepoint.hpp"
#include "pool.hpp"
#include "value.hpp"

#include <memory>

uint256_t zeroHash();

class Tuple {
   private:
    TuplePool* tuplePool;
    std::shared_ptr<RawTuple> tpl;

    friend uint256_t hash(const Tuple&);

    uint256_t calculateHash() const;

   public:
    Tuple() = default;

    Tuple(TuplePool* pool, size_t size) {
        if (size > 0) {
            tuplePool = pool;
            tpl = pool->getResource(size);
            for (size_t i = 0; i < size; i++) {
                tpl->data.push_back(Tuple{});
            }
            tpl->cachedHash = calculateHash();
        }
    }

    Tuple(value val, TuplePool* pool)
        : tuplePool(pool), tpl(pool->getResource(1)) {
        tpl->data.push_back(std::move(val));
        tpl->cachedHash = calculateHash();
    }

    Tuple(value val1, value val2, TuplePool* pool)
        : tuplePool(pool), tpl(pool->getResource(2)) {
        tpl->data.push_back(std::move(val1));
        tpl->data.push_back(std::move(val2));
        tpl->cachedHash = calculateHash();
    }

    Tuple(value val1, value val2, value val3, TuplePool* pool)
        : tuplePool(pool), tpl(pool->getResource(3)) {
        tpl->data.push_back(std::move(val1));
        tpl->data.push_back(std::move(val2));
        tpl->data.push_back(std::move(val3));
        tpl->cachedHash = calculateHash();
    }

    Tuple(value val1, value val2, value val3, value val4, TuplePool* pool)
        : tuplePool(pool), tpl(pool->getResource(4)) {
        tpl->data.push_back(std::move(val1));
        tpl->data.push_back(std::move(val2));
        tpl->data.push_back(std::move(val3));
        tpl->data.push_back(std::move(val4));
        tpl->cachedHash = calculateHash();
    }

    Tuple(value val1,
          value val2,
          value val3,
          value val4,
          value val5,
          TuplePool* pool)
        : tuplePool(pool), tpl(pool->getResource(5)) {
        tpl->data.push_back(std::move(val1));
        tpl->data.push_back(std::move(val2));
        tpl->data.push_back(std::move(val3));
        tpl->data.push_back(std::move(val4));
        tpl->data.push_back(std::move(val5));
        tpl->cachedHash = calculateHash();
    }

    Tuple(value val1,
          value val2,
          value val3,
          value val4,
          value val5,
          value val6,
          TuplePool* pool)
        : tuplePool(pool), tpl(pool->getResource(6)) {
        tpl->data.push_back(std::move(val1));
        tpl->data.push_back(std::move(val2));
        tpl->data.push_back(std::move(val3));
        tpl->data.push_back(std::move(val4));
        tpl->data.push_back(std::move(val5));
        tpl->data.push_back(std::move(val6));
        tpl->cachedHash = calculateHash();
    }

    Tuple(value val1,
          value val2,
          value val3,
          value val4,
          value val5,
          value val6,
          value val7,
          TuplePool* pool)
        : tuplePool(pool), tpl(pool->getResource(7)) {
        tpl->data.push_back(std::move(val1));
        tpl->data.push_back(std::move(val2));
        tpl->data.push_back(std::move(val3));
        tpl->data.push_back(std::move(val4));
        tpl->data.push_back(std::move(val5));
        tpl->data.push_back(std::move(val6));
        tpl->data.push_back(std::move(val7));
        tpl->cachedHash = calculateHash();
    }

    Tuple(value val1,
          value val2,
          value val3,
          value val4,
          value val5,
          value val6,
          value val7,
          value val8,
          TuplePool* pool)
        : tuplePool(pool), tpl(pool->getResource(8)) {
        tpl->data.push_back(std::move(val1));
        tpl->data.push_back(std::move(val2));
        tpl->data.push_back(std::move(val3));
        tpl->data.push_back(std::move(val4));
        tpl->data.push_back(std::move(val5));
        tpl->data.push_back(std::move(val6));
        tpl->data.push_back(std::move(val7));
        tpl->data.push_back(std::move(val8));
        tpl->cachedHash = calculateHash();
    }

    ~Tuple() {
        if (tpl.use_count() == 1) {
            tuplePool->returnResource(std::move(tpl));
        }
    }

    int tuple_size() const {
        if (tpl) {
            return tpl->data.size();
        } else {
            return 0;
        }
    }

    void set_element(int pos, value newval) {
        if (pos >= tuple_size()) {
            throw bad_tuple_index{};
        }

        if (tpl.use_count() > 1) {
            // make new copy tuple
            std::shared_ptr<RawTuple> tmp =
                tuplePool->getResource(tuple_size());

            std::copy(tpl->data.begin(), tpl->data.end(),
                      std::back_inserter(tmp->data));
            tpl = tmp;
        }
        tpl->data[pos] = std::move(newval);
        tpl->cachedHash = calculateHash();
    }

    value get_element(int pos) const {
        if (pos >= tuple_size()) {
            throw bad_tuple_index{};
        }
        return tpl->data[pos];
    }

    void marshal(std::vector<unsigned char>& buf) const;
    value clone_shallow();
};

inline uint256_t hash(const Tuple& tup) {
    if (tup.tpl) {
        return tup.tpl->cachedHash;
    } else {
        static uint256_t zeroHashVal = zeroHash();
        return zeroHashVal;
    }
}

inline bool operator==(const Tuple& val1, const Tuple& val2) {
    if (val1.tuple_size() != val2.tuple_size())
        return false;
    for (int i = 0; i < val1.tuple_size(); i++) {
        if (!(val1.get_element(i) == val2.get_element(i)))
            return false;
    }
    return true;
}

std::ostream& operator<<(std::ostream& os, const Tuple& val);

#endif /* tuple_hpp */
